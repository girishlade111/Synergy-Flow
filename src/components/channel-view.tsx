"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FileText,
  ImageIcon,
  Presentation,
  Sheet,
  File as FileIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { Channel, Task, File as FileType } from "@/lib/types";

import WorkTimer from "./work-timer";
import IntelligentTaskManager from "./intelligent-task-manager";
import MeetingSummarizer from "./meeting-summarizer";
import { ScrollArea } from "./ui/scroll-area";

const fileIcons = {
  document: <FileText className="h-5 w-5 text-muted-foreground" />,
  spreadsheet: <Sheet className="h-5 w-5 text-muted-foreground" />,
  presentation: <Presentation className="h-5 w-5 text-muted-foreground" />,
  image: <ImageIcon className="h-5 w-5 text-muted-foreground" />,
  other: <FileIcon className="h-5 w-5 text-muted-foreground" />,
};

export default function ChannelView({ channel }: { channel: Channel }) {
  const [discussionText, setDiscussionText] = React.useState(
    `# ${channel.name} - Sync Notes\n\n## Key Discussion Points:\n- We need to finalize the architecture for Project Phoenix. The current proposal looks good, but we should consider the long-term scalability implications.\n- Q3 marketing assets are almost ready. The design team will share the landing page mockups by EOD tomorrow.\n\n## Action Items:\n- @David to schedule a follow-up meeting to review the architecture diagram.\n- @Sarah to prepare the content for the social media calendar.`
  );

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center justify-between p-4 border-b">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">#{channel.name}</h2>
          <p className="text-muted-foreground">{channel.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <MeetingSummarizer
            channelName={channel.name}
            discussionText={discussionText}
          />
          <IntelligentTaskManager />
          <WorkTimer />
        </div>
      </header>

      <div className="flex-1 grid md:grid-cols-3 gap-6 p-6 overflow-hidden">
        <div className="md:col-span-2 flex flex-col gap-6">
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle>Collaborative Editor</CardTitle>
              <CardDescription>
                Real-time document collaboration with your team.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex">
              <Textarea
                value={discussionText}
                onChange={(e) => setDiscussionText(e.target.value)}
                placeholder="Start collaborating..."
                className="w-full h-full text-base resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6 overflow-hidden">
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardDescription>
                Track progress for {channel.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
                <ScrollArea className="h-full">
                    {channel.tasks.length > 0 ? (
                        <div className="space-y-4">
                        {channel.tasks.map((task) => (
                            <div key={task.id} className="flex items-center space-x-3">
                            <Checkbox id={`task-${task.id}`} checked={task.completed} />
                            <label
                                htmlFor={`task-${task.id}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {task.title}
                            </label>
                            </div>
                        ))}
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground">No tasks yet.</p>
                    )}
                </ScrollArea>
            </CardContent>
          </Card>

          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle>Files</CardTitle>
              <CardDescription>Shared documents and assets</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
                <ScrollArea className="h-full">
                    {channel.files.length > 0 ? (
                        <Table>
                        <TableBody>
                            {channel.files.map((file) => (
                            <TableRow key={file.id}>
                                <TableCell className="w-10">
                                {fileIcons[file.type]}
                                </TableCell>
                                <TableCell className="font-medium">{file.name}</TableCell>
                                <TableCell className="text-right text-muted-foreground">
                                {file.size}
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    ) : (
                        <p className="text-sm text-muted-foreground">No files yet.</p>
                    )}
                </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
