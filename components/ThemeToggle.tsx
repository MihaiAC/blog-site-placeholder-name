"use client";

import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import { useState, useRef } from "react";
import FloatyEmoji from "./FloatyEmoji";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [floaty, setFloaty] = useState<{
    emoji: string;
    rect: DOMRect;
    key: number;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setFloaty({
        emoji: newTheme === "dark" ? ":)" : ":(",
        rect,
        key: Date.now(),
      });
    }
  };

  return (
    <>
      <button ref={buttonRef} onClick={handleToggle} aria-label="Toggle theme">
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
      {floaty && (
        <FloatyEmoji
          key={floaty.key}
          emoji={floaty.emoji}
          buttonRect={floaty.rect}
          onComplete={() => setFloaty(null)}
        />
      )}
    </>
  );
}
