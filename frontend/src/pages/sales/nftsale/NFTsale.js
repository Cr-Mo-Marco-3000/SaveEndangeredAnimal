import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import NFTCard from '../../mypage/NFTList/NFTCard'
import { useState } from "react"
import { Pagination } from "@mui/material"
import usePagination from "components/pagination/Pagination"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';

import styles from './NFTsale.module.css'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function NFTsale() {
  
  const MySwal = withReactContent(Swal)
  const allData = []

  for (let index = 0; index < 27; index++) {
    let endangered = ""
    if (index % 3 === 0) {
      endangered = "멸종"
    } else if (index % 3 === 1) {
      endangered = "위급"
    } else {
      endangered = "위기"
    }
    const newItem = {
      animalImg: "https://source.unsplash.com/random",
      animalName: "여우",
      endangered: endangered,
    }
    allData.push(newItem)
  }

  const [page, setPage] = useState(1) // 처음 페이지는 1이다.
  const PER_PAGE = 4
  const count = Math.ceil(allData.length / PER_PAGE)
  const data = usePagination(allData, PER_PAGE)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChange = (e, p) => {
    setPage(p)
    data.jump(p)
  }

  const saleClick = () => {
    MySwal.fire({
      title: <p>판매하시겠습니까?</p>,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire('판매가 완료되었습니다.', '판매 리스트에 올라갑니다. </br>많은 판매 부탁드립니다.', 'success');
      } else
          Swal.fire('진행 중단', '', 'error')
    })
  }

  const [salePrice, setSalePrice] = useState(null)

  const onChangeAccount = (e) => {
    setSalePrice(
         e.target.value
    );
    console.log(salePrice);
  };   
  
  return (
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 12">
          <Grid container spacing={3}>
            {data.currentData().map((data, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={3}>
                {/* <NFTCard animalData={data}></NFTCard> */}
              </Grid>
            ))}
          </Grid>
          <Pagination
        count={count}
        page={page}
        color="primary"
        size="small"
        sx={{ margin: 1 }}
        onChange={handleChange}
      />
        </Box>
        
        <Box gridColumn="span 12">
            <Typography gutterBottom variant="subtitle1" component="div">
              현재 가격 : 1000 RopstenETH
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              판매 가격 설정 : 
              <input
                  className={styles.input}
                  type="number"
                  step="0.01"
                  placeholder="판매가격을 입력하세요"
                  onChange={onChangeAccount}
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                ></input>
              
              RopstenETH
              {/* <img
                  src={require("resources/img/logo/ethereumLogo.png")}
                  alt="ethreumLogo"
                ></img> */}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Typography gutterBottom variant="subtitle1" component="div">
              판매 시작일 : 
                <DatePicker 
                 className={styles.input}
                  dateFormat="yyyy년 MM월 dd일"
                  selected={startDate} 
                  onChange={date => setStartDate(date)} 
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  locale={ko}
                  />
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                판매 종료일 : 
                <DatePicker 
                 className={styles.input}
                  dateFormat="yyyy년 MM월 dd일"
                  selected={endDate} 
                  onChange={date => setEndDate(date)} 
                  selectsEnd
                  endDate={endDate}
                  minDate={startDate}
                  locale={ko}
                  />
            </Typography></Typography><br/>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <button 
                  className={styles.button}
                  onClick={saleClick}
                  style={{
                    cursor: "pointer",
                  }}>판매하기
                  </button>
              </Typography>
              
            </Grid>
        </Box>
      </Box>

  );
}
