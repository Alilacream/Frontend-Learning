import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
  const [pads, setPads] = React.useState(padsData)

  function toggle(id) {
    // NOTE: useState function are used to change state.
    // After that tutor asked to map all over pads.
    // Going on, we made a simple refrence function that checks and returns 
    // BUG: i made was not using the specified object, (i only switched the on attribute)
    //
    setPads(prev => prev.map(pad => {
      //BUG: pad.id === id ? !pad.on : pad 
      return pad.id === id ? { ...pad, on: !pad.on } : pad
    }
    ))

  }


  const buttonElements = pads.map(pad => (
    <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} />
  ))

  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  )
}
