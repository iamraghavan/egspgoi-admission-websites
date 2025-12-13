'use server';
/**
 * @fileOverview A flow for generating student testimonials.
 *
 * - generateTestimonials - A function that creates multiple testimonial quotes in a batch.
 * - GenerateTestimonialsInput - The input type for the generateTestimonials function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AlumnusSchema = z.object({
  id: z.string().describe("A unique identifier for the alumnus."),
  name: z.string().describe("The student's name."),
  department: z.string().describe("The student's department."),
  institution: z.string().describe("The student's institution."),
});

const GenerateTestimonialsInputSchema = z.object({
  alumni: z.array(AlumnusSchema),
});
export type GenerateTestimonialsInput = z.infer<typeof GenerateTestimonialsInputSchema>;

const TestimonialOutputSchema = z.object({
    id: z.string().describe("The unique identifier for the alumnus this testimonial belongs to."),
    quote: z.string().describe("The generated testimonial quote."),
});

const GenerateTestimonialsOutputSchema = z.object({
    testimonials: z.array(TestimonialOutputSchema),
});


const prompt = ai.definePrompt({
    name: 'generateTestimonialPrompt',
    input: { schema: GenerateTestimonialsInputSchema },
    output: { schema: GenerateTestimonialsOutputSchema },
    prompt: `You are an AI assistant for a university. Your task is to generate a short, positive, and authentic-sounding testimonial quote (1-2 sentences) for each alumnus in the provided list.

The testimonial should reflect their experience based on their department and institution.

Generate a quote for each of the following alumni:
{{#each alumni}}
- Alumnus ID: {{{id}}}
- Alumnus Name: {{{name}}}
- Department: {{{department}}}
- Institution: {{{institution}}}
{{/each}}

For each alumnus, generate a unique quote that sounds like a real person wrote it. Focus on aspects like faculty support, infrastructure, curriculum relevance, or career opportunities.

Do not include the person's name in the quote itself.

The output must be a JSON object containing a "testimonials" array. Each object in the array must have the original "id" of the alumnus and the generated "quote".
`,
  });


const generateTestimonialFlow = ai.defineFlow(
  {
    name: 'generateTestimonialFlow',
    inputSchema: GenerateTestimonialsInputSchema,
    outputSchema: GenerateTestimonialsOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await prompt(input);
      if (!output) {
        return { testimonials: [] };
      }
      return output;
    } catch (error) {
      console.error("Error generating testimonials:", error);
      // Return an empty array on failure to allow frontend to use fallbacks
      return { testimonials: [] };
    }
  }
);

export async function generateTestimonials(input: GenerateTestimonialsInput): Promise<z.infer<typeof GenerateTestimonialsOutputSchema>> {
    return generateTestimonialFlow(input);
}
