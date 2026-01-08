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
        <span className="toggle-icon inline-flex">
          <Icon icon="ph:sun-bold" width="20" height="20" />
        </span>
      ) : (
        <span className="toggle-icon inline-flex">
          <Icon icon="ph:moon-bold" width="20" height="20" />
        </span>
      )}
    </button>
  );
}
