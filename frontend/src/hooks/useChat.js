import { useState } from "react";
import { streamMessage } from "../services/api";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSendMessage(userMessage) {
    if (!userMessage.trim()) return;

    setLoading(true);

    // User message
    const user = {
      role: "user",
      content: userMessage,
    };

    // Empty assistant message
    const assistant = {
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, user, assistant]);

    try {
      await streamMessage(userMessage, (data) => {

        if (data.done) {
          setLoading(false);
          return;
        }

        if (data.error) {
          throw new Error(data.error);
        }

        if (data.text) {

          setMessages((prev) => {

            const updated = [...prev];

            updated[updated.length - 1] = {
              ...updated[updated.length - 1],
              content:
                updated[updated.length - 1].content +
                data.text,
            };

            return updated;

          });

        }

      });

    } catch (error) {

      console.error(error);

      setMessages((prev) => {

        const updated = [...prev];

        updated[updated.length - 1] = {
          role: "assistant",
          content: "Something went wrong.",
        };

        return updated;

      });

    } finally {

      setLoading(false);

    }

  }

  return {
    messages,
    loading,
    handleSendMessage,
  };
}