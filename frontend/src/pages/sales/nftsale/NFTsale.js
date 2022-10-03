import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useLocation , useNavigate, useHistory } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import NFTCard from './NFTCard';
import { useState, useEffect  } from "react"
import { Pagination, Typography  } from "@mui/material"
import usePagination from "components/pagination/Pagination"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import api from "api/api"
import styles from './NFTsale.module.css'


export default function NFTsale() {
  const MySwal = withReactContent(Swal)
  const [allData, setAllData] = useState([])
  const [page, setPage] = useState(1)
  const PER_PAGE = 4
  const count = Math.ceil(allData.length / PER_PAGE)
  const data = usePagination(allData, PER_PAGE)
  const [startDate, setStartDate] = useState(new Date()); // 달력은 뜨지만 현재 날짜로 고정되어 있음 
  const [endDate, setEndDate] = useState(new Date());
  const [salePrice, setSalePrice] = useState(null)
  const navigate = useNavigate()


  const handleChange = (e, p) => {
    setPage(p)
    data.jump(p)
  }

  // 선택한 NFT 데이터 (img, animalName, endangered)
  const [selectNFTdata , setSelectNFTdata ] = useState()
  const getnft = (nftData) => {
    setSelectNFTdata(nftData)
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
          Swal.fire('판매가 완료되었습니다.', '판매 리스트에 올라갑니다. </br>많은 판매 부탁드립니다.', 'success')
        } else
          Swal.fire('진행 중단', '', 'error')
    })
  }

  // 판매 가격 설정 
  const onChangeAccount = (e) => {
    setSalePrice(
         e.target.value
    );
    console.log(salePrice);
  };   

  useEffect(() => {
    const getNFTList = async () => {
      const result = await api.item.getItem("User")
      setAllData(result.list)
    }
    getNFTList()

    // api 하려다 만것..
    const saleRegistration = async() => {
      const sale = await api.sale.openSale(
        // saleContractAddress,
        // saleCashContractAddress,
        startDate,
        endDate,
        // itemId,
      )
    }

    // console.log(selectNFTdata)
    // console.log(salePrice)
    // console.log(startDate)
    // console.log(endDate)

  }, [])

  useEffect(() => {
    data.setNewData(allData)
    return () => {}
  }, [allData, data])
  
 
  return (
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 12">
          <Grid container spacing={3}>
            {data.currentData().map((data, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={3}>
               <NFTCard NFTData={data} getNFTdata={getnft}></NFTCard>
              </Grid>
            ))}
          </Grid>
          <Pagination
              count={count} 
              page={page}
              color="primary"
              size="large"
              sx={{
                margin: 2,
                display: "inline-block",
              }}
              onChange={handleChange} 
            />
        </Box>
        
        <Box gridColumn="span 12">
            {/* <Typography gutterBottom variant="subtitle1" component="div">
              현재 가격 : 1000 RopstenETH
            </Typography> */}
            <Typography gutterBottom variant="subtitle1" component="div">
              판매 가격 설정(ETH) : <br />
              <input
                  className={styles.input}
                  type="number"
                  step="0.01"
                  placeholder="판매가격을 입력하세요"
                  onChange={onChangeAccount}
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                ></input>
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
                  // onChange={date => setStartDate(date)} 
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
