// next plan we build ratelimiting to this
import { InferenceClient } from '@huggingface/inference'
import { SYSTEM_PROMPT, VITE_AI_API_KEY } from './config'

// wa had l api key cha7fni
const hf = new InferenceClient(VITE_AI_API_KEY)
export async function getHfResponse(ingredientsArr) {
  // first time using try catch method 
  // NOTE: hand coding is fun :3, until you hit a bug :<

  const data = `i have a list of ingredients, ${ingredientsArr.join(",")}. make me a recipe you'd recommend make.`
  if (data.length < 3) {
    console.error("Length of the ingredient's list is short...")
    return
  }
  try {
    const result = await hf.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct", // or any chat model on HF
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: data }
      ],
      max_tokens: 1024
    })
    // hada howa li dar lina l problem. 
    // NOTE: each ai inferrence has it's own result methods.
    return result.choices[0].message.content
  } catch (e) {
    console.log(e.message)
  } finally {
    console.log("Recipe Done :3")
  }
}
