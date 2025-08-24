import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export default function UserProfile() {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="woman smiling" alt="User Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Jane Doe</span>
          <span className="text-xs text-muted-foreground">
            jane.doe@example.com
          </span>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
}
