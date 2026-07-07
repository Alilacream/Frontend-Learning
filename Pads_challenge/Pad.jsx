// the bug here was we were using a state here that stayed constante, that is why the pads
// HACK: Didn't chage opacity
export default function Pad(props) {

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : undefined}
      onClick={() => props.toggle(props.id)}
    ></button>
  )
}
