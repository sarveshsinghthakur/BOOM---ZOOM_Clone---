"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

export default function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl: "https://sarvesh009.app.n8n.cloud/webhook/318baa7a-3761-49d7-89e9-c4a170fe69ee/chat", 
      });
    });
  }, []);

  return null; 
}
