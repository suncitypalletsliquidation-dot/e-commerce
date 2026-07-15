/**
 * Helper to get cookie value by name
 */
export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

/**
 * Set the Google Translation cookie and refresh the page to apply the translation
 */
export const setGoogleTrans = (code: "en" | "fr" | "es") => {
  if (typeof window === "undefined") return;

  const currentCookie = getCookie("googtrans");
  const currentLang = currentCookie?.split("/")?.at(2) || "en";

  // If already set to the target language, do nothing
  if (currentLang === code && code !== "en" && currentCookie) return;
  if (code === "en" && !currentCookie) return;

  const cookieValue = `/en/${code}`;
  const hostname = window.location.hostname;

  // Clear existing cookie just in case
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
  if (hostname.includes(".")) {
    const parts = hostname.split(".");
    if (parts.length >= 2) {
      const rootDomain = "." + parts.slice(-2).join(".");
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
    }
  }

  // Set the new cookie
  // If the target is English (default), we don't strictly need the cookie,
  // but to force Google Translate back to English, we can set googtrans=/en/en or leave it empty.
  // Setting /en/en or clearing it works. Let's set it to /en/en to force it, or keep it set.
  document.cookie = `googtrans=${cookieValue}; path=/;`;
  document.cookie = `googtrans=${cookieValue}; path=/; domain=${hostname};`;

  // Also set for domain with subdomains if applicable
  if (hostname.includes(".")) {
    const parts = hostname.split(".");
    if (parts.length >= 2) {
      const rootDomain = "." + parts.slice(-2).join(".");
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${rootDomain};`;
    }
  }

  // Reload the page to apply changes
  window.location.reload();
};

/**
 * Get currently active translation language
 */
export const getActiveLanguage = (): "en" | "fr" | "es" => {
  const currentCookie = getCookie("googtrans");
  if (!currentCookie) return "en";
  const lang = currentCookie.split("/").at(2);
  if (lang === "fr" || lang === "es" || lang === "en") {
    return lang;
  }
  return "en";
};
