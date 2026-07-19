import { motion } from "framer-motion";

export default function SuggestionCard({
  icon,
  title,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -4,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className="
      flex
      items-center
      gap-4
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900/70
      p-5
      text-left
      transition-all
      duration-300
      hover:border-emerald-500
      hover:shadow-[0_0_35px_rgba(0,200,150,.18)]
      "
    >
      <span className="text-2xl">
        {icon}
      </span>

      <span className="font-medium text-white">
        {title}
      </span>
    </motion.button>
  );
}