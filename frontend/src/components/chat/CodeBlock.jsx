import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({
  language,
  value,
}) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(value);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="my-5 overflow-hidden rounded-2xl border border-zinc-800">

      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-2">

        <span className="text-sm text-zinc-400">
          {language}
        </span>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
        >
          {copied ? (
            <>
              <Check size={15} />
              Copied
            </>
          ) : (
            <>
              <Copy size={15} />
              Copy
            </>
          )}
        </button>

      </div>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "20px",
          background: "#0a0a0a",
        }}
      >
        {value}
      </SyntaxHighlighter>

    </div>
  );
}