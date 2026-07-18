import Markdown from "react-markdown"
// Last challenge completed
export default function GetIng(props) {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <Markdown>{props.response}</Markdown>
      </article>
    </section>
  )
}
