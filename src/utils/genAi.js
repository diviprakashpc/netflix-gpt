import { GoogleGenerativeAI } from '@google/generative-ai'
import { GEN_AI_KEY } from './constants';

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GEN_AI_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});