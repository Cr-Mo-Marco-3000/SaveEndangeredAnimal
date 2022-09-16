import * as React from "react"
import styles from "./MyPageInfo.module.css"

export default function MyPageInfo() {
  const myNFTToken = 1000 //후에 contract 주소에서 내 NFT 잔고를 가져오는 방식으로 변경
  return (
    <div className={styles.myPageInfo}>
      <div className={styles.title}>마이 페이지</div>
      <div className={styles.nftToken}>
        보유 NFT Token : {myNFTToken}
        <img
          className={styles.logoImg}
          src={require("resources/img/logo/ethereumLogo.png")}
          alt="ethreumLogo"
        ></img>
      </div>
    </div>
  )
}
