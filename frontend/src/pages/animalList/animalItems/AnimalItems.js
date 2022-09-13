import AnimalItem from "./animalItem/AnimalItem"
import "./AnimalItems.css"
function AnimalItems(props) {
  const animalList = props.animalList
  return (
    <div className="animal-items">
      <AnimalItem animalItem={animalList[0]} />
      <AnimalItem animalItem={animalList[0]} />
      <AnimalItem animalItem={animalList[0]} />
    </div>
  )
}

export default AnimalItems
