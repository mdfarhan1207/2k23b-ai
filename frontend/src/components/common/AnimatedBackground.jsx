import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Emerald Orb */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-150px] top-[-100px]h-[420px] w-[420px]
        rounded-full
        bg-emerald-500/20
        blur-[140px]
        "
      />

      {/* Purple Orb */}

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-150px]
        right-[-120px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-purple-500/15
        blur-[170px]
        "
      />

    </div>
  );
}