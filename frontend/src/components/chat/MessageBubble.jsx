import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

export default function MessageBubble({
  role,
  content,
}) {
  const isUser = role === "user";

  return (
    <div
      className={`mb-6 flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[80%]
          rounded-3xl
          px-5
          py-4
          shadow-lg
          ${
            isUser
              ? "bg-emerald-500 text-black"
              : "border border-zinc-800 bg-zinc-900 text-white"
          }
        `}
      >
        <ReactMarkdown
          components={{
            code({
              inline,
              className,
              children,
              ...props
            }) {
              const match =
                /language-(\w+)/.exec(
                  className || ""
                );

              if (!inline && match) {
                return (
                  <CodeBlock
                    language={match[1]}
                    value={String(children).replace(
                      /\n$/,
                      ""
                    )}
                  />
                );
              }

              return (
                <code
                  className="rounded bg-zinc-800 px-1 py-0.5"
                  {...props}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}