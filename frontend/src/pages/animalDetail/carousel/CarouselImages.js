import * as React from "react"
import Carousel from "react-material-ui-carousel"
//import { Paper, Button } from "@mui/material";
import styles from "./CarouselImages.module.css"
import { useState, useEffect } from "react"
function CarouselImages(props) {
  //실제론 동물 폴더 이름과 파일 번호를 제대로 지어줘야할 것
  const [items, setItems] = useState([
    require("resources/img/animals/bengalTiger" + "/" + 1 + ".jpg"),
    require("resources/img/animals/bengalTiger" + "/" + 2 + ".jpg"),
    require("resources/img/animals/bengalTiger" + "/" + 3 + ".jpg"),
  ])
  const animalName = "bengalTiger"

  // for (let i = 1; i <= 3; i++) {
  //   items.push({
  //     src: require("resources/img/animals/" + animalName + "/" + i + ".jpg"),
  //   })
  //   //console.log(items[i])
  // }

  //제대로 props 전달 되면 이값으로 변경
  useEffect(() => {
    //setItems(props.animalImgs)
    console.log(props.animalImgs)
  }, [props.animalImgs])

  return (
    <div className={styles.CarouselImagesBox}>
      <Carousel height={500} navButtonsAlwaysVisible={true}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  )
}
function Item(props) {
  return (
    <div>
      <img
        className={styles.AnimalImage}
        src={props.item}
        alt="Animal-Images"
      />
    </div>
  )
}

export default CarouselImages
