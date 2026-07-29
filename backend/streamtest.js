import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

try {
  const stream = await ai.models.generateContentStream({
    model: "gemini-3.6-flash",
    contents: "Say hello",
  });

  console.log("TYPE:", typeof stream);
  console.log(stream);

  for await (const chunk of stream) {
    console.log("CHUNK:");
    console.dir(chunk, { depth: null });
  }
} catch (err) {
  console.error(err);
}