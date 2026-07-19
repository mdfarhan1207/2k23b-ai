import Header from "../components/layout/Header";
import ChatBox from "../components/chat/ChatBox";
import ChatInput from "../components/chat/ChatInput";
import { useChat } from "../hooks/useChat";

export default function ChatPage() {
  const {
    messages,
    loading,
    handleSendMessage,
  } = useChat();

  return (
    <div className="mx-auto flex h-screen max-w-6xl flex-col px-6 py-6">

      {/* Header */}
      <Header />

      {/* Chat Container */}
      <div className="flex-1 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
        <ChatBox
          messages={messages}
          onSuggestionClick={handleSendMessage}
        />
      </div>

      {/* Input */}
      <div className="mt-6">
        <ChatInput
          loading={loading}
          onSend={handleSendMessage}
        />
      </div>

    </div>
  );
}