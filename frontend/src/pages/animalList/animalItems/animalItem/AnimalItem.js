import style from "./AnimalItem.css"

function AnimalItem(props) {
  const koreanName = props.animalItem.animal_korean_name
  const scientificName = props.animalItem.animal_scientific_name
  const nowItem = props.animalItem.animal_now_item
  const maxItem = props.animalItem.animal_max_item
  const endangeredLevel = props.animalItem.animal_endangered_level
  const type = props.animalItem.animal_type
  const imageAddress = props.animalItem.animal_image_address
  const description = props.animalItem.animal_desc.slice(0, 200) + "..."
  return (
    <div className={style.animalItem}>
      <div className={style.animalItem_block}>
        <div className={style.imageArea}>
          <img
            className={style.imageArea_image}
            src={imageAddress}
            alt="logoimage"
          />
        </div>
        <div className={style.scriptArea}>
          <div className={style.scriptAreaHorizon}>
            <div className={style.scriptAreaHorizon_info}>{koreanName}</div>
            <div className={style.scriptAreaHorizon_info}>
              <div className={style.scriptAreaHorizon_info}>
                {scientificName}
              </div>
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
