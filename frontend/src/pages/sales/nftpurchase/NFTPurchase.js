// export default function NFTsale() {
//     return (
//         <></>
//     )
// }

import { useState, useEffect } from "react"
import { styled } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import ButtonBase from "@mui/material/ButtonBase"
import { Button } from "@mui/material"
import api from "api/api"
import Swal from "sweetalert2"

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
})

export default function ComplexGrid(props) {
  const [saleData, setSaleData] = useState({})

  const NFTClick = () => {
    Swal.fire({
      background: "rgba(211, 224, 234, 0.6)",
      width: "60rem",
      padding: "0rem 0rem 1rem 0rem",
      heightAuto: true,
      imageUrl: saleData.itemImgUrl,
      imageHeight: 900,
      // imageWidth: 1920,
      imageAlt: "NFT Image",
      //confirmButtonText: "닫기",
      showConfirmButton: false,
    })
  }

  useEffect(() => {
    const getSaleData = async () => {
      const result = await api.sale.getSaleDetail(props.saleId)
      //console.log(result.sale)
      setSaleData(result.sale)
    }

    getSaleData()
  }, [])
  return (
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase sx={{ width: 500, height: 500 }} onClick={NFTClick}>
          <Img alt="complex" src={saleData.itemImgUrl} />
        </ButtonBase>
      </Grid>

      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography
              sx={{ marginTop: "1rem" }}
              gutterBottom
              variant="h4"
              component="div"
            >
              {saleData.itemTitle}
            </Typography>
            <Grid sx={{ marginTop: "7rem" }}>
              <Typography variant="body1" gutterBottom>
                동물 이름 : {saleData.animalKoreanName}
              </Typography>

              <Typography variant="body1" gutterBottom>
                판매기간 : {new Date(saleData.saleStartTime).toLocaleString()} ~
              </Typography>
              <Typography variant="body1" gutterBottom>
                {new Date(saleData.saleEndTime).toLocaleString()}
              </Typography>
            </Grid>
            <Grid sx={{ marginTop: "7rem" }}>
              <Typography variant="body1" color="text.secondary">
                금액 : {saleData.salePrice} eth
              </Typography>
              <Typography variant="body1" color="text.secondary">
                현재 잔고 : 55 eth (변수 처리해주세요)
              </Typography>
              <Grid sx={{ marginTop: "3rem" }} item>
                <Button variant="contained">구매하기</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
