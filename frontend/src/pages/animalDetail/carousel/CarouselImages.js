import React from "react";
import Carousel from "react-material-ui-carousel";
//import { Paper, Button } from "@mui/material";
import styles from "./CarouselImages.module.css";

function CarouselImages(props) {
  //실제론 동물 폴더 이름과 파일 번호를 제대로 지어줘야할 것
  const items = [];
  const animalName = "bengalTiger";

  for (let i = 1; i <= 4; i++) {
    items.push({
      src: require("../../../resources/img/animals/" +
        animalName +
        "/" +
        i +
        ".jpg"),
    });
    console.log(items[i]);
  }
  return (
    <div className={styles.CarouselImagesBox}>
      <Carousel height={500} navButtonsAlwaysVisible={true}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
function Item(props) {
  return (
    <div>
      <img
        className={styles.AnimalImage}
        src={props.item.src}
        alt="Animal-Images"
      />
    </div>
  );
}

export default CarouselImages;
