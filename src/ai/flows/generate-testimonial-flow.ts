'use server';
/**
 * @fileOverview A flow for generating student testimonials.
 *
 * - generateTestimonial - A function that creates a testimonial quote.
 * - GenerateTestimonialInput - The input type for the generateTestimonial function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateTestimonialInputSchema = z.object({
  name: z.string().describe("The student's name."),
  department: z.string().describe("The student's department."),
  institution: z.string().describe("The student's institution."),
});
export type GenerateTestimonialInput = z.infer<typeof GenerateTestimonialInputSchema>;

const prompt = ai.definePrompt({
    name: 'generateTestimonialPrompt',
    input: { schema: GenerateTestimonialInputSchema },
    prompt: `You are an AI assistant for a university. Your task is to generate a short, positive, and authentic-sounding testimonial quote (2-3 sentences) for an alumnus named {{{name}}}.
  
  The testimonial should reflect their experience based on their department and institution.
  
  Details:
  - Alumnus Name: {{{name}}}
  - Department: {{{department}}}
  - Institution: {{{institution}}}
  
  Generate a quote that sounds like a real person wrote it. Focus on aspects like faculty support, infrastructure, curriculum relevance, or career opportunities.
  
  Do not include the person's name in the quote itself. The output should be only the quote text, without any introductory phrases like "Here is a quote:".
  `,
  });
  

const generateTestimonialFlow = ai.defineFlow(
  {
    name: 'generateTestimonialFlow',
    inputSchema: GenerateTestimonialInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { text } = await prompt(input);
    return text;
  }
);

export async function generateTestimonial(input: GenerateTestimonialInput): Promise<string> {
    return generateTestimonialFlow(input);
}
