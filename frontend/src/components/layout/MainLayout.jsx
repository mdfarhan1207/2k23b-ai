import AnimatedBackground from "../common/AnimatedBackground";
import { useTheme } from "../../context/ThemeContext";

export default function MainLayout({ children }) {
  const { theme } = useTheme();
  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${theme === "dark"
        ? "bg-[#050505] text-white"
        : "bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-zinc-900"
        }`}
    >

      <AnimatedBackground />

      {children}

    </main>
  );
}