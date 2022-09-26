import React from 'react';
import { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../../components/footer/Footer'
import { Routes, Route } from 'react-router-dom';
import ExpressionPage from '../expression/ExpressionPage';
import Navbar from '../../components/navbar/Navbar';
import MyPage from '../mypage/MyPage';
import AnimalListPage from '../animalList/AnimalList';
import AnimalList from '../animalList/AnimalList';
import Modal from '../../components/modal/Modal'
import NFTsale from '../sales/nftsale/NFTsale'
import NFTpurchase from '../sales/nftpurchase/NFTPurchase'
import cookies from 'react-cookies';
import { ethers } from "ethers";
import SweetTest from '../modal/SweetTest'


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Mainpage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => { setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); };

  
  // const buySomething = 
  // console.log(cookies.load('id'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom>
              지금 40종의 동물들이 당신의 도움을 기다리고 있습니다.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              멸종위기종이 많습니다. <br/> 인간도 곧 멸종될 수 있다
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center">
              <Button variant="contained">기부하러 가기</Button>
              {/* <Button onClick={buySomething}>구매</Button> */}
              <button onClick={openModal} >테스트 모달</button>
              <Modal open={modalOpen} close={closeModal} header="테스트모달"><NFTsale /></Modal>
              {/* <Modal open={modalOpen} close={closeModal} header="테스트모달"><NFTsale /></Modal> */}
          
            </Stack>
            <SweetTest />
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          도움을 기다리는 동물들 <br/>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      동물명 / 위급등급
                    </Typography>
                    <Typography>
                      설명 있어도되고 없어도 되고..
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">상세 페이지/혹은 모달</Button>
                    <Button size="small">기부금액</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
       {/* <Routes>
         <Route path="express/*" element={<ExpressionPage />}></Route>
         <Route path="mypage/*" element={<MyPage />}></Route>
         <Route path="animalList" element={<AnimalList />}></Route>
       </Routes> */}
     </ThemeProvider>
  );
}