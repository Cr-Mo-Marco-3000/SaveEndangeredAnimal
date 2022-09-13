import "./AnimalItem.css"

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
    <div className="animal-item">
      <div className="animal-item_block">
        <div className="image-area">
          <img
            className="image-area_image"
            src={imageAddress}
            alt="logoimage"
          />
        </div>
        <div className="script-area">
          <div className="script-area-horizon">
            <div className="script-area-horizon_info">{koreanName}</div>
            <div className="script-area-horizon_info">{scientificName}</div>
            <div className="script-area-horizon_info">
              NFT {nowItem}/{maxItem}
            </div>
          </div>
          <div className="script-area-horizon">
            {type} / {endangeredLevel}
          </div>
          <div className="script-area-horizon">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default AnimalItem
