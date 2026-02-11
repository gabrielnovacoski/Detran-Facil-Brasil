
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getVehicleConsultationTips = async (stateName: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Explique brevemente (em até 3 tópicos curtos) quais as principais consultas de veículos disponíveis no site do DETRAN de ${stateName} e quais documentos o usuário geralmente precisa ter em mãos (como Renavam e Placa). Seja direto e útil.`,
    });
    return response.text || "Não foi possível carregar as dicas no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Consulte o site oficial para informações detalhadas sobre taxas e prazos.";
  }
};
