import { GoogleGenAI } from "@google/genai";

export async function generateResponse(message) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: message,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to generate AI response.");
  }
}

export async function generateStreamingResponse(message) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const stream = await ai.models.generateContentStream({
    model: "gemini-3.5-flash",
    contents: message,
  });

  return stream;
}