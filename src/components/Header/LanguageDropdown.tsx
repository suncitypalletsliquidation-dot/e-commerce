"use client";

import { useEffect, useState, useRef } from "react";
import { getActiveLanguage, setGoogleTrans } from "@/utils/translation";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
] as const;

interface LanguageDropdownProps {
  align?: "left" | "right";
}

export default function LanguageDropdown({
  align = "right",
}: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "fr" | "es" | null>(
    null,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentLang(getActiveLanguage());
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (currentLang === null) {
    // Avoid mismatch during hydration by showing a loading or neutral state
    return (
      <div className="h-9 w-28 rounded-full bg-gray-1 animate-pulse border border-gray-3" />
    );
  }

  const selected =
    languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div ref={dropdownRef} className="relative inline-block text-left z-[997]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-3 bg-white text-dark font-medium text-custom-sm transition-all duration-200 hover:bg-gray-1 hover:border-gray-4"
        type="button"
      >
        <span className="text-custom-lg leading-none">{selected.flag}</span>
        <span className="hidden sm:inline">{selected.label}</span>
        <span className="sm:hidden">{selected.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 text-gray-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-1.5 w-36 bg-white border border-gray-3 rounded-xl shadow-2 p-1 animate-in fade-in slide-in-from-top-1 duration-100 z-9999`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setGoogleTrans(lang.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left rounded-lg text-custom-sm font-medium transition-all ${
                currentLang === lang.code
                  ? "bg-blue/10 text-blue"
                  : "text-dark-3 hover:bg-gray-2 hover:text-dark"
              }`}
              type="button"
            >
              <span className="text-custom-lg leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
