import { useState, useCallback } from "react";

type Text = string | number | undefined | null | boolean | object;

type CopyToClipboard = (text: Text) => void;

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard: CopyToClipboard = useCallback((text: Text) => {
    if (typeof text === "string" || typeof text === "number") {
      navigator.clipboard
        .writeText(text.toString())
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1500); // Reset after 1.5 seconds
        })
        .catch(() => setIsCopied(false));
    }
  }, []);

  return { isCopied, copyToClipboard };
}
