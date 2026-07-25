import { useState } from "react";
import {
  SendHorizontal,
  Paperclip,
  X,
  Mic,
  MicOff,
} from "lucide-react";
export default function ChatInput({ onSend, loading }) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [listening, setListening] = useState(false);
  function startListening() {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setListening(true);

    recognition.start();

    recognition.onresult = (event) => {

      const transcript =
        event.results[0][0].transcript;

      setMessage((prev) =>
        prev
          ? prev + " " + transcript
          : transcript
      );

    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mt-6"
    >
      <div className="group flex items-center rounded-3xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500 focus-within:border-emerald-500 focus-within:shadow-[0_0_35px_rgba(16,185,129,0.25)]">
        <>
          <input
            id="file-upload"
            type="file"
            hidden
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setFile(e.target.files[0]);
              }
            }}
          />

          <label
            htmlFor="file-upload"
            className="mr-2 cursor-pointer rounded-xl p-2 transition hover:bg-zinc-800"
          >
            <Paperclip size={20} />
          </label>
        </>

        <input
          type="text"
          placeholder="Ask Lingua AI anything..."
          value={message}
          disabled={loading}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-transparent px-2 text-lg text-white placeholder:text-zinc-500 focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="ml-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-black transition-all duration-300 hover:scale-110 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
          ) : (
            <SendHorizontal size={20} />
          )}
        </button>
        <button
          type="button"
          onClick={startListening}
          className={`mr-3 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110 ${listening
              ? "bg-red-500 text-white animate-pulse"
              : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
        >

          {listening ? (
            <MicOff size={20} />
          ) : (
            <Mic size={20} />
          )}

        </button>

      </div>
      {file && (
        <div className="mt-3 flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2">
          <span className="truncate text-sm text-zinc-300">
            📎 {file.name}
          </span>

          <button
            type="button"
            onClick={() => setFile(null)}
            className="text-red-400 hover:text-red-300"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </form>
  );
}