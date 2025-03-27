import axios from "axios";
import { API_KEY } from "./constants";

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

export const getGeminiResponse = async (prompt) => {
  try {
    const response = await axios.post(API_URL, {
    contents: [{ parts: [{ text: prompt }] }] ,
    });

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    return "Error fetching response.";
  }
};
