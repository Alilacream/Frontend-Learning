import { useState, useEffect, useRef } from "react"
import Form from "./components/Form"
import Ingredients from "./components/Ingredients"
import Recipe from "./components/Recipe"
import GetIng from "./components/getRecipe"
import { getHfResponse } from "./ai"
export default function Main() {


  const [ingredients, setIngredients] = useState([])
  // changed it to string, to change state into the ai response
  const [recipe, setRecipe] = useState("")

  const recipeSection = useRef(null)
  // NOTE: you can use await method only in async functions
  async function getRecipe() {
    const recipeMarkdown = await getHfResponse(ingredients)
    // set the new recipe
    setRecipe(recipeMarkdown)
    console.log(recipeMarkdown)
  }
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }
  // using useRef
  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView()
    }
  }, [recipe])
  return (
    <main>
      {/** shuf dir hna forum */}
      <Form addIngredient={addIngredient} />
      {ingredients.length > 0 &&
        <section>
          <Ingredients list={ingredients} />
          {ingredients.length > 3 && <Recipe toggle={getRecipe} ref={recipeSection} />}
        </section>}
      {recipe && <GetIng response={recipe} />}
    </main>
  )
}
