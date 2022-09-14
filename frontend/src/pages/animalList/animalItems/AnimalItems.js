import AnimalItem from "./animalItem/AnimalItem"
import style from "./AnimalItems.css"

function AnimalItems(props) {
  const animalList = props.animalList
  return (
    <div className={style.animalItems}>
      <AnimalItem animalItem={animalList[0]} />
      <AnimalItem animalItem={animalList[0]} />
      <AnimalItem animalItem={animalList[0]} />
    </div>
  )
}

export default AnimalItems
