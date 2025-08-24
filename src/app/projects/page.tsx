import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { channels } from "@/lib/data";
import { Folder, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">
            An overview of all ongoing and past projects.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Project
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Projects</CardTitle>
          <CardDescription>
            Click on a project to view its details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel) => (
              <div
                key={channel.id}
                className="p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-md">
                    <Folder className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{channel.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {channel.description}
                    </p>
                    <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                      <span>{channel.tasks.length} tasks</span>
                      <span>{channel.files.length} files</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
