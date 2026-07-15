export default function Forum(props) {
  return (
    <form action={props.addIngredient} className="add-ingredient-form">
      <input
        type="text"
        placeholder="e.x: oregano"
        aria-label="Add ingredient"
        name="ingredient"
      />
      <button>Add ingredient</button>
    </form>
  )
}
