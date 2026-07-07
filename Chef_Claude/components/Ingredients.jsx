export default function Ingredients(props) {
  const ingredientsListItems = props.list.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))
  return (
    <>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
    </>

  )
}
