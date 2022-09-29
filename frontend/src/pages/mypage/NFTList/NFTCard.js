import * as React from "react"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import styles from "./NFTCard.module.css"

export default function NFTCard(props) {
  const NFTdata = {
    img: props.NFTData.itemImgUrl,
    endangered: props.NFTData.animalEndangeredLevel,
    animalName: props.NFTData.animalKoreanName,

  }
  console.log(NFTdata.img)
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
        sx={{ boxShadow: 3 }}
        component="img"
        // sx={{
        //   // 16:9
        //   pt: '56.25%',
        // }}
        //image="https://source.unsplash.com/random"
        image={NFTdata.img}
        alt="animalImg"
      />
      <CardContent
        sx={{
          flex: "1 1 auto",
          boxShadow: "1",
          height: "1rem",
        }}
        className={styles.cardContent}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            mr: "2.5rem",
            lineHeight: "1.1rem",
          }}
          component="div"
        >
          {NFTdata.animalName}
        </Typography>
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold", lineHeight: "1.1rem" }}
          component="div"
          style={
            NFTdata.endangered === "1"
              ? { color: "red" }
              : NFTdata.endangered === "2"
              ? { color: "blue" }
              : { color: "green" }
          }
        >
          { NFTdata.endangered === "1"
              ? "위급"
              : NFTdata.endangered === "2"
              ? "위기"
              : "취약"}
        </Typography>
      </CardContent>
    </Card>
  )
}
