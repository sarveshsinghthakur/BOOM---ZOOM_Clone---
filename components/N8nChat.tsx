"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@n8n/chat/dist/chat.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).createChat) {
        (window as any).createChat({
          webhookUrl: "https://sarvesh009.app.n8n.cloud/webhook/318baa7a-3761-49d7-89e9-c4a170fe69ee/chat", 
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return <div id="n8n-chat"></div>;
}
