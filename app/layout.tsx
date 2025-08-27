import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import N8nChat from "./components/N8nChat"; // ✅ Import client component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      >
        <head>
  <script src="https://unpkg.com/@n8n/chat/dist/chat.js"></script>
</head>

        <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          {children}
          <N8nChat /> 
        </body>
      </ClerkProvider>
    </html>
  );
}
