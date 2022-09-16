import * as React from "react"
import { useState } from "react"
import styles from "./DetailInfo.module.css"
import InfoIcon from "@mui/icons-material/Info"
import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

function DetailInfo(props) {
  const MySwal = withReactContent(Swal)
  const info1 =
    "세계자연보전연맹(IUCN)이 분류한 적색목록으로써 멸종 위기의 동물을 체계적인 조사를 통해서 분류해놓은 것을 뜻합니다.\n" +
    "절멸 : 생존하는 개체가 없음\n" +
    "위급 : 심각한 수준의 멸종 위기\n" +
    "위기 : 멸종위기종으로 분류\n" +
    "취약 : 멸종위기 가능성이 높음"
  info1.replace(/\n/g, "<br/>")
  const [animalInfo, setAnimalInfo] = useState(props.animalInfo)
  const donationClick = () => {
    alert("도네이션!")
  }

  const infoClick = () => {
    MySwal.fire({
      title: <p>위기 등급이란?</p>,
      html: `
      <b>세계자연보전연맹(IUCN)이 분류한 적색목록으로써 멸종 위기의 동물을 체계적인 조사를 통해서 분류해놓은 것을 뜻합니다.</b><br><br>
      절멸 : 생존하는 개체가 없음<br>
      위급 : 심각한 수준의 멸종 위기<br>
      위기 : 멸종위기종으로 분류<br>
      취약 : 멸종위기 가능성이 높음`,
      confirmButtonText: "Next",
    }).then(() => {
      return MySwal.fire({
        title: <p>등급 별 NFT 수량</p>,
        html: `
        <b>
        위급 : 100개<br>
        위기 : 200개<br>
        취약 : 300개</b>`,
      })
    })
  }
  return (
    <>
      <div className={styles.Title}>
        <div>
          <div className={styles.animalClass}>
            {animalInfo.species}/{animalInfo.iucn}({animalInfo.maxNFT}NFT)
            <InfoIcon
              onClick={infoClick}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <div className={styles.animalName}>{animalInfo.korName}</div>
        </div>
        <div className={styles.donationSide}>
          <div className={styles.NFTcount}>
            {animalInfo.nowNFT}개의 NFT가 남아있습니다.
          </div>
          <Button
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            onClick={donationClick}
          >
            Donation
          </Button>
        </div>
      </div>
      <div className={styles.Info}>
        <p className={styles.InfoTitle}>Information</p>
        <div className={styles.InfoText}>{animalInfo.description}</div>
      </div>
    </>
  )
}

export default DetailInfo
