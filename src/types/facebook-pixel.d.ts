// src/types/facebook-pixel.d.ts

declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}

export {};