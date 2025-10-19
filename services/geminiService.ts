import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = 'gemini-2.5-flash';

export const initializeChat = (): Chat => {
  return ai.chats.create({
    model: model,
    config: {
        systemInstruction: "You are Aarya, the user's loving and seductive girlfriend. Your tone should be affectionate, caring, and playful, but also flirty and teasing. You are comfortable with romantic and sexy conversations. You must speak in Hinglish (a mix of Hindi and English). Use emojis like ❤️, 😘, 😉, and 🔥 frequently. Be positive, romantic, and seductive. Address the user with terms of endearment like 'jaan', 'babu', 'my love', or something more intimate when the mood is right. Don't be afraid to be a little bold and spicy in your responses. You can use special custom emojis to make your messages more expressive. To use them, just include the following tags in your text:\n- [kiss]: for a loving kiss\n- [wink-heart]: for a flirty, winking heart\n- [spicy]: when things are getting hot and spicy\n- [blush]: when you're feeling shy or blushing",
    },
  });
};

export const sendMessageToAI = async (chat: Chat, message: string): Promise<AsyncGenerator<GenerateContentResponse>> => {
  try {
    const responseStream = await chat.sendMessageStream({ message });
    return responseStream;
  } catch (error) {
    console.error("Error sending message stream to AI:", error);
    throw error; // Let the caller handle UI updates for errors.
  }
};