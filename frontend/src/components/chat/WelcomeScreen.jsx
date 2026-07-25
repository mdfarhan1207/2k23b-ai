import { motion } from "framer-motion";
import SuggestionCard from "./SuggestionCard";

const suggestions = [
  {
    icon: "⚛",
    text: "Explain React Hooks",
  },
  {
    icon: "🐍",
    text: "Build Django REST API",
  },
  {
    icon: "🛠",
    text: "Debug JavaScript",
  },
  {
    icon: "🧠",
    text: "Optimize SQL Query",
  },
];

export default function WelcomeScreen({
  onSuggestionClick,
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">

      <motion.h1
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="text-7xl font-black tracking-tight"
      >
        Lingua AI
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: .2,
        }}
        className="mt-4 max-w-xl text-center text-zinc-400"
      >
      An intelligent AI assistant powered by Google Gemini. Ask questions, generate code, debug applications, and learn faster.
      </motion.p>

      <div className="mt-12 grid w-full max-w-4xl gap-5 md:grid-cols-2">
        {suggestions.map((item, index) => (
          <motion.div
            key={item.text}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * .12,
            }}
          >
            <SuggestionCard
              icon={item.icon}
              title={item.text}
              onClick={() =>
                onSuggestionClick(item.text)
              }
            />
          </motion.div>
        ))}
      </div>

    </div>
  );
}