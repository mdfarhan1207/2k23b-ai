import Header from "../components/layout/Header";
import ChatBox from "../components/chat/ChatBox";
import ChatInput from "../components/chat/ChatInput";
import AnimatedBackground from "../components/common/AnimatedBackground";
import { useChat } from "../hooks/useChat";

export default function ChatPage() {
    const {
        messages,
        loading,
        handleSendMessage,
    } = useChat();

    return (
        <div className="relative flex h-screen items-center justify-center overflow-hidden bg-[#050505] p-6">

            <AnimatedBackground />

            <div
                className="
      relative
      z-10
      flex
      h-[95vh]
      w-full
      max-w-7xl
      flex-col
      overflow-hidden
      rounded-[36px]
      border
      border-zinc-800
      bg-zinc-950/70
      backdrop-blur-3xl
      shadow-[0_0_80px_rgba(0,0,0,.65)]
      "
            >

                <Header />

                <div className="flex-1 overflow-hidden">

                    <ChatBox
                        messages={messages}
                        loading={loading}
                        onSuggestionClick={handleSendMessage}
                    />

                </div>

                <div className="border-t border-zinc-800 p-6">

                    <ChatInput
                        loading={loading}
                        onSend={handleSendMessage}
                    />

                </div>

            </div>

        </div>
    );
}