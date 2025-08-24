'use server';

/**
 * @fileOverview A channel discussion summarization AI agent.
 *
 * - summarizeChannelDiscussions - A function that summarizes discussions within a channel.
 * - SummarizeChannelDiscussionsInput - The input type for the summarizeChannelDiscussions function.
 * - SummarizeChannelDiscussionsOutput - The return type for the summarizeChannelDiscussions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeChannelDiscussionsInputSchema = z.object({
  channelName: z.string().describe('The name of the channel to summarize.'),
  discussionText: z.string().describe('The full text of the discussion within the channel.'),
});
export type SummarizeChannelDiscussionsInput = z.infer<typeof SummarizeChannelDiscussionsInputSchema>;

const SummarizeChannelDiscussionsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the channel discussion.'),
});
export type SummarizeChannelDiscussionsOutput = z.infer<typeof SummarizeChannelDiscussionsOutputSchema>;

export async function summarizeChannelDiscussions(input: SummarizeChannelDiscussionsInput): Promise<SummarizeChannelDiscussionsOutput> {
  return summarizeChannelDiscussionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeChannelDiscussionsPrompt',
  input: {schema: SummarizeChannelDiscussionsInputSchema},
  output: {schema: SummarizeChannelDiscussionsOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing discussions within a project channel.

  Channel Name: {{{channelName}}}
  Discussion Text: {{{discussionText}}}

  Please provide a concise summary of the key topics, decisions, and action items discussed in the provided text.
  The summary should be no more than 3 paragraphs long.
  Please focus on providing actionable information to catch up on the discussion quickly.
  `,
});

const summarizeChannelDiscussionsFlow = ai.defineFlow(
  {
    name: 'summarizeChannelDiscussionsFlow',
    inputSchema: SummarizeChannelDiscussionsInputSchema,
    outputSchema: SummarizeChannelDiscussionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
