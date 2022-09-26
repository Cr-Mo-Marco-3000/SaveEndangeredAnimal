// export default function NFTsale() {
//     return (
//         <></>
//     )
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (

      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 200, height: 200 }}>
            <Img alt="complex" src="https://cdn.pixabay.com/photo/2020/07/17/02/23/gods-creation-5412752_960_720.png" />
          </ButtonBase>
        </Grid>
       
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                동물명#100 위기등급
              </Typography>
              <Typography variant="body2" gutterBottom>
                판매기간 : 22.9.10 - 22.10.2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                금액 : 555 $$$
              </Typography>
              <Typography variant="body2" color="text.secondary">
                현재 잔고 : 55 $$$
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <Button>구매하기</Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

  );
}
