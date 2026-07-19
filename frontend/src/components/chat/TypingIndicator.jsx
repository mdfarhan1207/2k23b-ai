import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="mb-6 flex justify-start">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 px-5 py-4">
        <div className="flex gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-2 w-2 rounded-full bg-emerald-400"
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: dot * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}