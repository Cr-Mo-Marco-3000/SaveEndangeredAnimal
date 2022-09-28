import * as React from "react"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import styles from "./AnimalCard.module.css"

export default function AnimalCard(props) {
  //정보 props로 받자
  //동물 이름, 이미지, nft 수집 여부 3개면 된다

  const animalData = {
    ...props,
  }

  //nft 수집 여부에 따라서 다른 CSS 먹이자
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
      }}
    >
      <CardMedia
        className={
          animalData.haveNFT === true ? styles.haveNFTImg : styles.haveNotNFTImg
        }
        sx={{ boxShadow: 3 }}
        component="img"
        // sx={{
        //   // 16:9
        //   pt: '56.25%',
        // }}
        //image="https://source.unsplash.com/random"
        image={animalData.animalImg}
        alt="animalImg"
      />
      <CardContent
        className={
          animalData.haveNFT === true
            ? styles.cardContent
            : styles.cardContentNotNFT
        }
      >
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold", lineHeight: "1rem" }}
          component="div"
        >
          {animalData.animalName}
        </Typography>
      </CardContent>
    </Card>
  )
}
