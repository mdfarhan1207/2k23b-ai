import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-220px] right-[-220px] h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[220px]"
      />

    </div>
  );
}