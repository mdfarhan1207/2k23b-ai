import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

export default function MessageBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`mb-8 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div className="max-w-[780px]">

        <p
          className={`mb-2 text-base font-semibold ${
            isUser
              ? "text-right text-emerald-400"
              : "text-zinc-400"
          }`}
        >
          {isUser ? "You" : "Lingua AI"}
        </p>

        <div
          className={`rounded-[28px] px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,.35)] ${
            isUser
              ? "bg-gradient-to-br from-emerald-500 to-emerald-400 text-black"
              : "border border-zinc-800/70 bg-zinc-900/70 backdrop-blur-xl text-white"
          }`}
        >
          <ReactMarkdown
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");

                if (!inline && match) {
                  return (
                    <CodeBlock
                      language={match[1]}
                      value={String(children).replace(/\n$/, "")}
                    />
                  );
                }

                return (
                  <code
                    className="rounded bg-zinc-800 px-1 py-0.5 text-emerald-300"
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
    </motion.div>
  );
}