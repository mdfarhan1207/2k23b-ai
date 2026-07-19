import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
        <Sparkles className="h-5 w-5 text-emerald-400" />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight">
          2K23B AI
        </h1>

        <p className="text-xs text-zinc-500">
          Powered by Google Gemini
        </p>
      </div>
    </motion.div>
  );
}