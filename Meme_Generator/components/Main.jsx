import { useState, useEffect } from "react"

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "Something different",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes, setAllMemes] = useState([])
  // onChange event handeler when user types in the input fields
  function handleChange(event) {
    const { value, name } = event.currentTarget
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  // fetching the array of json data of all memes
  useEffect(() => {
    console.log("the use effect was ran")
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(prev => {
        setAllMemes(prev.data.memes)
      })

  }, [])

  // get Random Image event handler
  // getting a random image from the data array
  // DOC: https://imgflip.com/api
  const getRandomImg = () => {
    const index = Math.floor(Math.random() * allMemes.length)
    if (allMemes.length === 0) {
      console.error("[ERROR]: all memes data aren't fetched")
      return
    }
    // BUG:i was returning the index...
    console.log("seeing the random index: ", allMemes[index].url)
    // BUG: for some reason, using imageUrl: allMemes[index].url, ...prev, made it so the state never changes
    // NOTE: the reason was that the last ...prev which had the old url value, it always rewrites our new imageurl value.
    setMeme(prev => ({ ...prev, imageUrl: allMemes[index].url, }))
    // to know that the user clicked
  }
  return (
    <main>
      <div className="form">
        <label>Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}

          />
        </label>
        <button onClick={getRandomImg}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  )
}
