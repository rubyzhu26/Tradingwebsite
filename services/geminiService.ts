
import { GoogleGenAI, Type } from "@google/genai";
import { ActivitySuggestion } from "../types";

// 确保 apiKey 以对象形式传递
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function generateMathActivity(householdItem: string): Promise<ActivitySuggestion> {
  const prompt = `Generate a creative, hands-on early math learning activity for a child (ages 3-7) using the following household item: ${householdItem}. 
  The activity should focus on concepts like counting, patterns, measurement, or spatial reasoning.
  Keep the instructions simple and warm.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            materials: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            instructions: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            mathConcept: { type: Type.STRING },
            ageRange: { type: Type.STRING }
          },
          required: ["title", "materials", "instructions", "mathConcept", "ageRange"]
        }
      }
    });

    if (!response || !response.text) {
      throw new Error("No response text from Gemini");
    }

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
