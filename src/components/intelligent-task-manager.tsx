"use client";

import * as React from "react";
import { useActionState, useFormStatus } from "react";
import { prioritizeTasks } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Loader2, Workflow, ListChecks } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
  data: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Prioritizing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Prioritize Tasks
        </>
      )}
    </Button>
  );
}

export default function IntelligentTaskManager() {
  const [open, setOpen] = React.useState(false);
  const [state, formAction] = useActionState(prioritizeTasks, initialState);
  const { toast } = useToast();

  React.useEffect(() => {
    if (state.message !== "success" && state.message !== "") {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
    if (state.message === "success") {
      // Keep showing the results, don't close the dialog automatically
    }
  }, [state, toast]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Sparkles className="mr-2 h-5 w-5" />
          AI Task Manager
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Intelligent Task Prioritization</DialogTitle>
          <DialogDescription>
            Let AI prioritize tasks and suggest an optimal workflow based on
            your project.
          </DialogDescription>
        </DialogHeader>

        {state.message === "success" && state.data ? (
          <div className="space-y-4 py-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                <ListChecks className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Prioritized Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{state.data.prioritizedTasks}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                <Workflow className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Suggested Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{state.data.suggestedWorkflow}</p>
              </CardContent>
            </Card>
             <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
                <Button onClick={() => (state.message = "")}>Start Over</Button>
            </DialogFooter>
          </div>
        ) : (
          <form action={formAction}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="projectGoals">Project Goals</Label>
                <Textarea
                  id="projectGoals"
                  name="projectGoals"
                  placeholder="e.g., Launch V2 of our platform by end of Q3..."
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="taskList">Task List (comma-separated)</Label>
                <Textarea
                  id="taskList"
                  name="taskList"
                  placeholder="e.g., Design UI, Develop API, User testing..."
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="deadlines">Deadlines</Label>
                  <Input
                    id="deadlines"
                    name="deadlines"
                    placeholder="e.g., Q3 End"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="teamSkills">
                    Team Skills (comma-separated)
                  </Label>
                  <Input
                    id="teamSkills"
                    name="teamSkills"
                    placeholder="e.g., React, Node.js, UX Design..."
                    required
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <SubmitButton />
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
