"use client";

import Highlight from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import { useTheme } from "next-themes";
import { type ReactNode, useEffect, useRef } from "react";

Highlight.registerLanguage("typescript", typescript);

interface SnippetCodeProps {
  value: ReactNode;
}

function SnippetCode({ value }: SnippetCodeProps) {
  const codeRef = useRef<HTMLElement>(null);
  const { theme: mode } = useTheme();

  useEffect(() => {
    let styleLink: HTMLLinkElement | null = null;

    if (mode === "dark") {
      styleLink = document.createElement("link");
      styleLink.rel = "stylesheet";
      styleLink.href = "/css/atom-one-dark.min.css";
    } else {
      styleLink = document.createElement("link");
      styleLink.rel = "stylesheet";
      styleLink.href = "/css/atom-one-light.min.css";
    }

    if (styleLink) {
      document.head.appendChild(styleLink);
    }

    return () => {
      if (styleLink) {
        document.head?.removeChild(styleLink);
      }
    };
  }, [mode]);

  useEffect(() => {
    if (codeRef.current) {
      Highlight.highlightBlock(codeRef.current);
    }
  }, [codeRef, mode]);

  return (
    <pre className="max-h-[450px] overflow-x-auto rounded-lg">
      <code ref={codeRef} className="typescript relative rounded bg-background px-[0.3rem] py-[0.2rem] font-mono text-sm">
        {value}
      </code>
    </pre>
  );
}

export default SnippetCode;
