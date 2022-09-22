import * as React from "react"
import NFTList from "./NFTList/NFTList"
import Menu from "./MenuBar/Menu"
import styles from "./SalePage.module.css"
import { useState } from "react"

export default function SalePage() {
  const [animalName, setAnimalName] = useState("전체보기")
  return (
    <div className={styles.outDiv}>
      <Menu setAnimalName={setAnimalName} />
      <NFTList animalName={animalName} />
    </div>
  )
}
