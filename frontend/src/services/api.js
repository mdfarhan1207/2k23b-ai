const API_BASE_URL = "http://13.126.135.28:5000";

export async function sendMessage(message) {
  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
}

export async function streamMessage(message, onChunk) {
  const response = await fetch(`${API_BASE_URL}/api/chat/stream`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    throw new Error("Streaming request failed");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    buffer += decoder.decode(value, { stream: true });

    const events = buffer.split("\n\n");

    buffer = events.pop();

    for (const event of events) {
      if (!event.startsWith("data:")) continue;

      const json = event.replace("data:", "").trim();

      if (!json) continue;

      const data = JSON.parse(json);

      onChunk(data);
    }
  }
}