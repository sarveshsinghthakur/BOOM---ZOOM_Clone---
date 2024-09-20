import { Card, CardHeader } from "@/components/ui/card";
import { Bot, User } from "lucide-react";

// Define the MessageType manually
type MessageType = {
  id: number;
  role: "user" | "assistant" | "system";
  content: string;
};

export default function Message({ message }: { message: MessageType }) {
  const { role, content } = message;

  if (role === "assistant") {
    return (
      <div className="flex flex-col gap-3 p-6 whitespace-pre-wrap">
        <div className="flex items-center gap-2 text-blue-50">
          <Bot />
          Assistant:
        </div>
        <div className="text-blue-50">{content}</div>
      </div>
    );
  }

  return (
    <Card className="whitespace-pre-wrap">
      <CardHeader>
        <div className="flex items-center gap-2 text-blue-50">
          <User size={36} />
          {content}
        </div>
      </CardHeader>
    </Card>
  );
}
