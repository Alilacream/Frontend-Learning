import Header from "./components/Header"
import Entry from "./components/Entry"
import mapData from "./data.js"
/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */
// .map creates a new array 
const maps = mapData.map((value) => <Entry
    img= {{
        src: value.img.src,
        alt: value.img.alt
    }}
    title={value.title}
    country={value.country}
    googleMapsLink={value.googleMapsLink}
    dates={value.dates}
    text={value.text}
/>)
export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                {maps}
            </main>
        </>
    )
}