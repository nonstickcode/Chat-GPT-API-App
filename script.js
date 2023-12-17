import { config } from "dotenv";
config();

import OpenAI from "openai";
import readline from "readline";

// Create a new instance of the OpenAI object with your API key
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on("line", async input => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    });

    // Log the structure of the 'message' object
    console.log(response.choices[0].message.content);

  } catch (error) {
    console.error("Error:", error);
  }
  userInterface.prompt();
});
