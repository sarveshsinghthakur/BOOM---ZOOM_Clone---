"use client";
import { useEffect } from "react";
import "@n8n/chat/style.css";

export default function N8nChat() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).createChat) {
      (window as any).createChat({
        webhookUrl: "https://sarvesh009.app.n8n.cloud/webhook/318baa7a-3761-49d7-89e9-c4a170fe69ee/chat",
      });
    }
  }, []);

  return <div id="n8n-chat"></div>;
}
