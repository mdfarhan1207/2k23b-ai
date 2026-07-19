import { useState } from "react";

export default function ChatInput({
  onSend,
  loading,
}) {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3"
    >
      <input
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
        type="text"
        placeholder="Ask Gemini anything..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        disabled={loading}
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-blue-600 px-6 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "..." : "Send"}
      </button>
    </form>
  );
}