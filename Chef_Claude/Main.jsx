import React from "react"
import Form from "./components/Form"
import Ingredients from "./components/Ingredients"
import Recipe from "./components/Recipe"
import GetIng from "./components/getIngredients"
import { getHfResponse } from "./ai"
export default function Main() {
  /**
   * Challenge: clean up our code!
   * Let's make a couple new components to make things a
   * little cleaner. (Notice: I'm not suggesting what we
   * have now is bad or wrong. I'm mostly finding an excuse
   * to get in some hands-on practice 🙂)
   * 
   * 1. Move the entire recipe <section> into its own
   *    ClaudeRecipe component
   * 2. Move the list of ingredients <section> into its
   *    own IngredientsList component.
   * 
   * While you're considering how to structure things, consider
   * where state is, think about if it makes sense or not to
   * move it somewhere else, how you'll communicate between
   * the parent/child components, etc.
   * 
   * The app should function as it currently does when you're
   * done, so there will likely be some extra work to be done
   * beyond what I've listed above.
   * Done <:
   */

  const [ingredients, setIngredients] = React.useState([])
  // changed it to string, to change state into the ai response
  const [recipe, setRecipe] = React.useState("")


  // NOTE: you can use await method only in async functions
  async function getRecipe() {

    const recipeMarkdown = await getHfResponse(ingredients)
    // set the new recipe
    setRecipe(recipeMarkdown)
  }
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  return (
    <main>
      {/** shuf dir hna forum */}
      <Form addIngredient={addIngredient} />
      {ingredients.length > 0 && <section>
        <Ingredients list={ingredients} />
        {ingredients.length > 3 && <Recipe toggle={getRecipe} />}
      </section>}
      {recipeShown && <GetIng response={recipe} />}
    </main>
  )
}
