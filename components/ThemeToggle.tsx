"use client";

import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Icon icon="ph:sun-bold" width="24" height="24" />
      ) : (
        <Icon icon="ph:moon-bold" width="24" height="24" />
      )}
    </button>
  );
}
