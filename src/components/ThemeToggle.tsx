"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark, mounted]);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Tema Değiştir"
      className="rounded-md h-10 px-3 border border-border-light dark:border-border-dark hover:bg-surface-light/60 dark:hover:bg-surface-dark/60"
      onClick={() => setIsDark((v) => !v)}
    >
      {isDark ? "Açık" : "Koyu"}
    </button>
  );
}

