"use server";

import { z } from "zod";
import { prioritizeTasks as intelligentTaskPrioritization } from "@/ai/flows/intelligent-task-prioritization";
import { summarizeChannelDiscussions } from "@/ai/flows/summarize-channel-discussions";

const taskSchema = z.object({
  projectGoals: z.string().min(1, "Project goals are required."),
  taskList: z.string().min(1, "Task list is required."),
  deadlines: z.string().min(1, "Deadlines are required."),
  teamSkills: z.string().min(1, "Team skills are required."),
});

export async function prioritizeTasks(prevState: any, formData: FormData) {
  const validatedFields = taskSchema.safeParse({
    projectGoals: formData.get("projectGoals"),
    taskList: formData.get("taskList"),
    deadlines: formData.get("deadlines"),
    teamSkills: formData.get("teamSkills"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await intelligentTaskPrioritization(validatedFields.data);
    return {
      message: "success",
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

const summarySchema = z.object({
  channelName: z.string(),
  discussionText: z.string().min(10, "Discussion text is too short."),
});

export async function summarizeDiscussion(prevState: any, formData: FormData) {
  const validatedFields = summarySchema.safeParse({
    channelName: formData.get("channelName"),
    discussionText: formData.get("discussionText"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    const result = await summarizeChannelDiscussions(validatedFields.data);
    return {
      message: "success",
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
