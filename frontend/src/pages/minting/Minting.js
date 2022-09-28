//올 정보
//이미지 링크(1~4개?)
//animal Info
//해야할 일
//이미지 고르기-> 고른 이미지로 animalInfo의 이름과 NFT 개수로 제목 만들고 , 설명 넣어서 IPFS 배포 후 주소값 전달
import { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import LoadingButton from "@mui/lab/LoadingButton"
import { Grid } from "@mui/material"
import ImageCard from "./ImageCard"
import styles from "./Minting.module.css"
import * as IPFS from "components/ipfs/IPFS"
import api from "api/api"
import { useLocation } from "react-router-dom"

const Minting = () => {
  const [loading, setLoading] = useState(false)
  //이미지 //아마 이후는 parameter 등으로 오는 정보 받는 걸로 변경
  const [imgs, setImgs] = useState([
    "http://cdn.ggilbo.com/news/photo/201810/554743_412892_159.jpg",
    "https://image.shutterstock.com/image-photo/fennec-fox-on-white-background-260nw-1737572291.jpg",
    "http://img.segye.com/content/image/2022/09/06/20220906518232.jpg",
    "https://uyjoqvxyzgvv9714092.cdn.ntruss.com/data2/content/image/2011/05/25/.cache/512/20110525098468.jpg",
  ])
  //선택한 이미지 변수
  const [selectImg, setSelectImg] = useState("")
  //동물 정보
  const location = useLocation()

  const animalDesc = location.state.animalDesc
  const animalKorName = location.state.animalKoreanName
  const animalEngName = location.state.animalEnglishName
  const animalNowItem = location.state.animalNowItem

  function changeSelectImg(imgLink) {
    setSelectImg(imgLink)
  }

  useEffect(() => {
    const makeImgs = async () => {
      const result = await api.user.getPictureURL(animalEngName)
      console.log(result)
      setImgs(result)
    }

    makeImgs()
  }, [])

  useEffect(() => {}, [imgs])

  const minting = async function () {
    setLoading(true)
    const result = await IPFS.createToken(
      animalKorName + "#" + animalNowItem,
      animalDesc,
      selectImg,
    )
    setLoading(false)

    console.log(result)
    //이 이후에 result값을 web3로 토큰 값으로 넘기면 됩니다.
  }
  return (
    <div className={styles.outDiv}>
      <Grid container spacing={6}>
        {imgs.map((link, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={6}>
            <ImageCard
              imageLink={link}
              selectImg={selectImg}
              setSelectImg={changeSelectImg}
            />
          </Grid>
        ))}
      </Grid>
      <div className={styles.buttonDiv}>
        <LoadingButton
          sx={{
            fontSize: "30px",
            width: "13rem",
            height: "4rem",
          }}
          variant="contained"
          onClick={minting}
          loading={loading}
          loadingPosition="end"
        >
          Minting
        </LoadingButton>
      </div>
    </div>
  )
}

export default Minting
