import { Languages, Moon } from "lucide-react"; import { motion } from "framer-motion";
import Logo from "../common/Logo";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 flex items-center justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/60 px-6 py-4 backdrop-blur-xl"
    >
      <Logo />

      <div className="flex items-center gap-3">
        <button className="rounded-xl border border-zinc-800 p-3 transition-all duration-300 hover:border-emerald-500 hover:bg-zinc-800">
          <Languages size={18} />
        </button>

        <button className="rounded-xl border border-zinc-800 p-3 transition-all duration-300 hover:border-emerald-500 hover:bg-zinc-800">
          <Moon size={18} />
        </button>

        <button className="rounded-xl border border-zinc-800 p-3 transition-all duration-300 hover:border-emerald-500 hover:bg-zinc-800">
          GitHub
        </button>
      </div>
    </motion.header>
  );
}