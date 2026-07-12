import { InferenceClient } from '@huggingface/inference'
import { SYSTEM_PROMPT, VITE_AI_API_KEY } from './config'

const hf = new InferenceClient(VITE_AI_API_KEY)
// wa had l api key cha7fni
export async function getHfResponse(data) {
  // first time using try catch method 
  // NOTE: hand coding is fun :3, until you hit a bug :<
  try {
    const result = await hf.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct", // or any chat model on HF
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: data }
      ],
      max_tokens: 1024
    })
    return result.choices[0].message
  } catch (e) {
    console.log(e.message)
  } finally {
    console.log("Recipe Done :3")
  }
}
