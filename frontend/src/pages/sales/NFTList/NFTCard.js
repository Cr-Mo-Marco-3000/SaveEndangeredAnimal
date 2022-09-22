import * as React from "react"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import styles from "./NFTCard.module.css"

export default function NFTCard(props) {
  //NFT data 로 받아온 값에서 필요한 것은 토큰 id로 부터 얻어와서 처리해야할 것
  //NFTdata 구성
  // {
  //  itemId: int,
  //  itemTitle: String
  //  itemPrice: double,
  //  itemTokenId: String,
  // animalKoreanName: String,
  // }
  const NFTdata = props.NFTData
  //그 외 데이터는NFT에서 가져와야할 것

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
        image={NFTdata.animalImg}
        alt="animalImg"
      />
      <CardContent
        sx={{ boxShadow: "1", height: "1rem" }}
        className={styles.cardContent}
      >
        <Typography gutterBottom variant="h5" component="div">
          {NFTdata.animalKoreanName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          판매기간 :
        </Typography>
        <Typography variant="body1" align="right">
          SSF
        </Typography>
      </CardContent>
    </Card>
  )
}
