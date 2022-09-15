import AnimalItem from "./animalItem/AnimalItem"
import style from "./AnimalItems.module.css"

function AnimalItems(props) {
  const animalList = props.animalList

  return (
    <div>
      <div className={style.animalItems}>
        {animalList.map((animal, index) => (
          <AnimalItem animalItem={animal} key={index} />
        ))}
      </div>
      {!animalList.length ? (
        <div className={style.announcement}>현재 등록된 동물이 없습니다</div>
      ) : null}
    </div>
  )
}

export default AnimalItems
