import { Languages, Moon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme(); return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="flex items-center justify-between rounded-none border-b border-zinc-800 bg-zinc-900/60 px-8 py-5 backdrop-blur-xl"
    >
      {/* Logo */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,.35)]">

          <Sparkles className="text-emerald-400" size={26} />

        </div>

        <div>

          <h1 className="text-3xl font-black tracking-tight">
            {t.title}
          </h1>

          <p className="text-sm text-zinc-500">
            {t.subtitle}
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex gap-3">

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,.25)]"
        >
          <Languages size={20} />

          <span className="text-xs font-semibold">
            {language === "en" ? "EN" : "हिं"}
          </span>
        </button>

        <button
          onClick={toggleTheme}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-3 transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,.25)]"
        >
          <Moon
            size={20}
            className={`transition-transform duration-300 ${theme === "dark" ? "rotate-0" : "rotate-180"
              }`}
          />
        </button>

      </div>

    </motion.header>
  );
}