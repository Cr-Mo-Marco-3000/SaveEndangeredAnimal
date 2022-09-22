import style from "./AnimalItem.module.css"
import { Link, useNavigate } from "react-router-dom"

function AnimalItem(props) {
  const koreanName = props.animalItem.animalKoreanName
  const scientificName = props.animalItem.animalScientificName
  const nowItem = props.animalItem.animalNowItem
  const maxItem = props.animalItem.animalMaxItem
  const endangeredLevel = props.animalItem.animalEndangeredLevel
  const type = props.animalItem.animalType
  const imageAddress = props.animalItem.animalImageAddress
  const description = props.animalItem.animalDesc.slice(0, 200) + "..."
  const animalId = props.animalItem.animalId

  const navigate = useNavigate()

  return (
    <div
      className={style.animalItem}
      onClick={() =>
        navigate("/main/animalDetail", { state: { animalId: animalId } })
      }
    >
      <div className={style.animalItem_block}>
        <div className={style.imageArea}>
          <img
            className={style.imageArea_image}
            //src={require(`resources/img/animals/${imageAddress}`)}
            src={imageAddress}
            alt="logoimage"
          />
        </div>
        <div className={style.scriptArea}>
          <div className={style.scriptAreaHorizon}>
            <div className={style.scriptAreaHorizon_info}>{koreanName}</div>
            <div className={style.scriptAreaHorizon_info}>{scientificName}</div>
            <div className={style.scriptAreaHorizon_info}>
              NFT {nowItem}/{maxItem}
            </div>
          </div>
          <div className={style.scriptAreaHorizon}>
            {type} / {endangeredLevel}
          </div>
          <div className={style.scriptAreaHorizon}>{description}</div>
        </div>
      </div>
    </div>
  )
}

export default AnimalItem
