'use server';
/**
 * @fileOverview A flow for generating SEO metadata based on a search query.
 *
 * - generateSeoMetadata - A function that creates a title, description, and keywords for a given query.
 * - GenerateSeoMetadataInput - The input type for the generateSeoMetadata function.
 * - GenerateSeoMetadataOutput - The output type for the generateSeoMetadata function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateSeoMetadataInputSchema = z.object({
  query: z.string().describe("The user's search query, e.g., 'admission Chennai' or 'best engineering colleges in Tamil Nadu'."),
});
export type GenerateSeoMetadataInput = z.infer<typeof GenerateSeoMetadataInputSchema>;

const GenerateSeoMetadataOutputSchema = z.object({
  title: z.string().describe("An SEO-optimized title (50-60 characters) that includes the user's query and 'EGS Pillay Group'."),
  description: z.string().describe("A compelling meta description (150-160 characters) that expands on the title and encourages clicks."),
  keywords: z.array(z.string()).describe("A list of 5-7 relevant SEO keywords related to the query and the institution."),
});
export type GenerateSeoMetadataOutput = z.infer<typeof GenerateSeoMetadataOutputSchema>;

const prompt = ai.definePrompt({
    name: 'generateSeoMetadataPrompt',
    input: { schema: GenerateSeoMetadataInputSchema },
    output: { schema: GenerateSeoMetadataOutputSchema },
    prompt: `You are an expert SEO specialist for the "EGS Pillay Group of Institutions" in Nagapattinam, Tamil Nadu.
Your goal is to generate SEO metadata that will rank the website in the top 3 search results for a given user query.

The user searched for: "{{query}}"

Based on this query, generate the following:
1.  **SEO Title:** A concise and compelling title (50-60 characters). It must include the user's keywords and mention "EGS Pillay Group" or a specific relevant college.
2.  **Meta Description:** An engaging description (150-160 characters) that elaborates on the title, includes a strong call-to-action (e.g., "Apply Now," "Explore Courses"), and incorporates the query naturally.
3.  **Keywords:** A list of 5-7 highly relevant keywords that a user might search for. Include long-tail keywords.

The EGS Pillay Group includes colleges for Engineering, Arts & Science, Polytechnic, Nursing, Pharmacy, Education, and Yoga. Tailor the metadata to be as relevant as possible to the user's query.

Example for query "admission Chennai":
- Title: Top College Admissions Near Chennai | EGS Pillay Group
- Description: Looking for top college admissions near Chennai? EGS Pillay Group offers accredited Engineering, Arts & Science degrees. Secure your future. Apply now for 2026-27!
- Keywords: ["college admissions Chennai", "engineering college near Chennai", "arts and science college near Chennai", "top institutions near Chennai", "EGS Pillay admissions"]

Now, generate the metadata for the query: "{{query}}".
`,
  });

const generateSeoMetadataFlow = ai.defineFlow(
  {
    name: 'generateSeoMetadataFlow',
    inputSchema: GenerateSeoMetadataInputSchema,
    outputSchema: GenerateSeoMetadataOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error("Failed to generate SEO metadata.");
    }
    return output;
  }
);

export async function generateSeoMetadata(input: GenerateSeoMetadataInput): Promise<GenerateSeoMetadataOutput> {
    return generateSeoMetadataFlow(input);
}
