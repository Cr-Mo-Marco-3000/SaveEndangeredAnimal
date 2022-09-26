import * as React  from 'react';
import { useState, useEffect } from "react"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
import CarouselImages from "../carousel/CarouselImages"
import api from "api/api.js"
import { useLocation } from "react-router-dom"
import DetailInfo from '../detailInfo/DetailInfo';
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Donation(props) {
  const MySwal = withReactContent(Swal)
  const location = useLocation()
  const animalId = location.state.animalId
  const [animalInfo, setAnimalInfo] = useState({})

  const infoClick = () => {
    MySwal.fire({
      title: <p>{animalInfo.animalKoreanName}에게 기부하시겠습니까?</p>,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire('기부가 완료되었습니다.', '감사합니다. </br>많은 기부 부탁드립니다.', 'success');
      } else
          Swal.fire('진행 중단', '', 'error')
    })
  }

  useEffect(() => {
    api.animal.getAnimalDetail(animalId).then((res) => {
      setAnimalInfo(res.dto)
    })
  }, [])

  return (

      <Grid container spacing={2} colums={12}>
        <Grid item xs={6}>
          <CarouselImages animalImgs={animalInfo.animalImg} ></CarouselImages>
        </Grid>
        <Grid item xs={6} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item><br/>
              <Typography variant="subtitle1" component="div" color="black">
                당신은 {animalInfo.animalKoreanName} 의 생존을 위해 기부하시려 합니다.<br />
                현재{animalInfo.animalNowItem}개의 NFT가 남아 있습니다.<br/>
                NFT를 얻을 수 있는 최소 금액은 [  ]입니다.<br/>
                </Typography>
                <br/>
                <Typography variant="body2" gutterBottom color="text.secondary">
                현재 잔고 : [  ]
              </Typography>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <Button onClick={infoClick}
                  style={{
                    cursor: "pointer",
                  }}>
                기부하기</Button>
              </Typography>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}
