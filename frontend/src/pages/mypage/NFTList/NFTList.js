import * as React from "react"
import { Grid } from "@mui/material";
import NFTCard from "./NFTCard";
import { useState} from "react";
import { Pagination } from "@mui/material";
import usePagination from "components/pagination/Pagination";
import styles from "./NFTList.module.css";

export default function NFTList() {
  const allData=[];
  for (let index = 0; index < 27; index++) {
    let endangered=""
    if(index%3 === 0){
      endangered="멸종"
    }else if(index%3 === 1){
      endangered="위급"
    }else{
      endangered="위기"
    }
    const newItem={
      animalImg:"https://source.unsplash.com/random",
      animalName: "여우",
      endangered:endangered,
    }
    allData.push(newItem);
  }

  const [page, setPage] = useState(1); // 처음 페이지는 1이다.
  const PER_PAGE=8;
  const count = Math.ceil(allData.length / PER_PAGE);
  const data = usePagination(allData, PER_PAGE);



  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };

  return (
    <div className={styles.outDiv} >
      <Grid container spacing={3} >
            {data.currentData().map((data) => (
              <Grid item key={data} xs={12} sm={6} md={3}>
                <NFTCard animalData={data}></NFTCard>
              </Grid>
            ))}
          </Grid>
          <Pagination count={count} page={page} 
        color="primary" size="large" sx={{margin: 2}} onChange={handleChange}/>
    </div>
  )
}
