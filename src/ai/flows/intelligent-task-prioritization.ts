// This file is machine-generated - edit at your own risk.
'use server';
/**
 * @fileOverview Implements the Genkit flow for intelligent task prioritization.
 *
 * - prioritizeTasks - A function that prioritizes tasks and suggests workflows.
 * - PrioritizeTasksInput - The input type for the prioritizeTasks function.
 * - PrioritizeTasksOutput - The return type for the prioritizeTasks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrioritizeTasksInputSchema = z.object({
  projectGoals: z
    .string()
    .describe('The overall goals and objectives of the project.'),
  taskList: z
    .string()
    .describe('A list of tasks to be prioritized, separated by commas.'),
  deadlines: z.string().describe('The project deadline.'),
  teamSkills: z
    .string()
    .describe(
      'The skills and expertise available within the team, separated by commas.'
    ),
});
export type PrioritizeTasksInput = z.infer<typeof PrioritizeTasksInputSchema>;

const PrioritizeTasksOutputSchema = z.object({
  prioritizedTasks: z
    .string()
    .describe('The prioritized list of tasks with suggested order.'),
  suggestedWorkflow: z
    .string()
    .describe('A suggested workflow based on task dependencies and team skills.'),
});
export type PrioritizeTasksOutput = z.infer<typeof PrioritizeTasksOutputSchema>;

export async function prioritizeTasks(input: PrioritizeTasksInput): Promise<PrioritizeTasksOutput> {
  return prioritizeTasksFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prioritizeTasksPrompt',
  input: {schema: PrioritizeTasksInputSchema},
  output: {schema: PrioritizeTasksOutputSchema},
  prompt: `You are an AI project manager. Your goal is to prioritize a list of tasks for a project, and suggest an optimal workflow, considering the project goals, task list, deadlines, and team skills. Project Goals: {{{projectGoals}}} Task List: {{{taskList}}} Deadline: {{{deadlines}}} Team Skills: {{{teamSkills}}} Based on this information, provide a prioritized list of tasks and a suggested workflow. Prioritized Tasks: Suggested Workflow: `,
});

const prioritizeTasksFlow = ai.defineFlow(
  {
    name: 'prioritizeTasksFlow',
    inputSchema: PrioritizeTasksInputSchema,
    outputSchema: PrioritizeTasksOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
