import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <Card>
          <CardHeader>
            <CardTitle>Our Team</CardTitle>
            <CardDescription>
              Meet the talented individuals driving SynergyFlow forward.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.email}
                  className="flex items-center gap-4 p-4 border rounded-lg bg-card"
                >
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={member.avatar} data-ai-hint={member.avatarHint} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
  );
}
