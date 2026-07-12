export default function GetIng(props) {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <p>{props.response}</p>
      </article>
    </section>
  )
}
