import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";

const teamMembers = [
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Project Manager",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "woman smiling",
  },
  {
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Lead Developer",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "man smiling",
  },
  {
    name: "Sarah Lee",
    email: "sarah.lee@example.com",
    role: "UX/UI Designer",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "woman with glasses",
  },
  {
    name: "David Chen",
    email: "david.chen@example.com",
    role: "Backend Developer",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "man in glasses",
  },
];

export default function TeamPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Our Team</h2>
          <p className="text-muted-foreground">
            Meet the talented individuals driving SynergyFlow forward.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Member
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            Manage your team members and their roles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.email}
                className="flex flex-col justify-between p-4 border rounded-lg bg-card"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={member.avatar}
                      data-ai-hint={member.avatarHint}
                      alt={member.name}
                    />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {member.email}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
