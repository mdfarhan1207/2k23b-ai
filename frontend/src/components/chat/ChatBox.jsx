import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import Welcome from "./WelcomeScreen";
import TypingIndicator from "./TypingIndicator";

export default function ChatBox({
    messages,
    loading,
    onSuggestionClick,
}) {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    if (messages.length === 0) {
        return (
            <Welcome
                onSuggestionClick={onSuggestionClick}
            />
        );
    }

    return (
        <div className="
h-full
overflow-y-auto
px-12
py-10
">
            {messages.map((message, index) => (
                <MessageBubble
                    key={index}
                    role={message.role}
                    content={message.content}
                />
            ))}

            {loading && <TypingIndicator />}
            <div ref={bottomRef} />
        </div>
    );
}