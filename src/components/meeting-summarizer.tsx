"use client";

import * as React from "react";
import { useActionState, useFormStatus } from "react";
import { summarizeDiscussion } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Book, Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "./ui/scroll-area";

const initialState = {
  message: "",
  data: null,
};

function SummarizeButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Summarizing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Summary
        </>
      )}
    </Button>
  );
}

interface MeetingSummarizerProps {
  channelName: string;
  discussionText: string;
}

export default function MeetingSummarizer({
  channelName,
  discussionText,
}: MeetingSummarizerProps) {
  const [open, setOpen] = React.useState(false);
  const [state, formAction] = useActionState(summarizeDiscussion, initialState);
  const { toast } = useToast();

  const handleSummarize = (formData: FormData) => {
    formData.append("channelName", channelName);
    formData.append("discussionText", discussionText);
    formAction(formData);
  };
  
  React.useEffect(() => {
    if (state.message !== "success" && state.message !== "") {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
      setOpen(false);
    }
  }, [state, toast]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Book className="mr-2 h-5 w-5" />
          Summarize
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Meeting Summary</DialogTitle>
          <DialogDescription>
            AI-generated summary of the discussion in #{channelName}.
          </DialogDescription>
        </DialogHeader>
        <form action={handleSummarize}>
          {state.message === "success" && state.data ? (
            <div className="space-y-4">
                <ScrollArea className="h-64">
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                        {state.data.summary}
                    </p>
                </ScrollArea>
                <DialogFooter>
                    <Button type="button" variant="secondary" onClick={() => { state.message = ""}}>Summarize again</Button>
                    <DialogClose asChild>
                        <Button type="button">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Click the button below to generate a summary of the current collaborative document.
              </p>
              <DialogFooter>
                  <SummarizeButton />
              </DialogFooter>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
