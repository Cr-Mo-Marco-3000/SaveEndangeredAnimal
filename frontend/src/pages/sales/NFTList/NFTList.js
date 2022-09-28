import * as React from "react"
import { Grid } from "@mui/material"
import NFTCard from "./NFTCard"
import { useState } from "react"
import { Pagination } from "@mui/material"
import usePagination from "components/pagination/Pagination"
import styles from "./NFTList.module.css"
import api from "api/api.js"

export default function NFTList(props) {
  //allData는 aixos 에서 가져올 것
  const [allData, setAllData] = React.useState([])

  //페이징 처리
  const [page, setPage] = useState(1) // 처음 페이지는 1이다.
  const PER_PAGE = 8
  const count = Math.ceil(allData.length / PER_PAGE)
  const data = usePagination(allData, PER_PAGE)

  //props.animalName 이 '전체보기'면 전체 리스트 동물의
  //한글이름이면 그 이름에 맞게 필터링해서 NFT 리스트
  //useEffect 안에서 data 필터링 필요
  //data 구성
  // {
  //  itemId: int,
  //  itemTitle: String
  //  itemPrice: double,
  //  itemTokenId: String,
  // animalKoreanName: String,
  // }
  //이대로 NFT data가 제대로 갱신되는지는 후에 해볼 영역
  React.useEffect(() => {
    //console.log(props.animalName)

    api.item.getItem("ALL").then((response) => {
      //console.log(response.list)
      setAllData([response])
      console.log(response)
      if (props.animalName !== "전체보기" && allData.length != 0) {
        allData = allData.filter(
          (data) => data.animalKoreanName === props.animalName,
        )
      }
      data.setNewData(allData)
      setPage(1)
      data.jump(1)
    })
  }, [props.animalName])

  const handleChange = (e, p) => {
    setPage(p)
    data.jump(p)
  }

  return (
    <div className={styles.outDiv}>
      <Grid container spacing={3}>
        {data.currentData().map((data, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={3}>
            <NFTCard NFTData={data}></NFTCard>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={count}
        page={page}
        color="primary"
        size="large"
        sx={{ margin: 2 }}
        onChange={handleChange}
      />
    </div>
  )
}
