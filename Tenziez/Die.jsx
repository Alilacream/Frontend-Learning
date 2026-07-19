export default function Die(props) {
  return (
    <button style={{ background: props.held ? "#59E391" : "white" }}
      onClick={() => props.toggle(props.id)}>{props.value}</button>
  )
}
