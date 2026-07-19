import AnimatedBackground from "../common/AnimatedBackground";

export default function MainLayout({ children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      <AnimatedBackground />

      {children}

    </main>
  );
}