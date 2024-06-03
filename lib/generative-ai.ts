import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function run(prompt: string) {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    prompt += " .On the basis of description please give form in json format with form title, form subheading with a form having form field, form name, placeholder name, and form label, fieldType, field required in json format"

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return text
}
