import React, { useEffect, useState } from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'; 
import { ethers } from "ethers";
import api from "api/api";
import coin from '../login/coin.png'
import sealogo from '../login/sealogo.png'
import sealogo2 from '../login/sealogo2.png'
import logo from '../../components/footer/sea.png'
import './Login.css'

const LoginPage = () => {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
    };

    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, 
  
  
  []);

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
          const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res[0]);
        setIsConnected(true);
        api.user.login(res[0]);
      } catch (err) {
        console.error(err);
        setErrorMessage("MetaMask 연결 에러");
      }
    } else {
      alert("MetaMask를 설치하세요.")
      setErrorMessage("MetaMask를 설치하세요.");
      window.open('https://metamask.io/download.html');
    }
  };

  const accountsChanged = async (newAccount) => {
    setAccount(newAccount);
    setCookie('id', newAccount);
    navigate("/main");
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage("MetaMask 연결 에러");
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };
  

  return (
    <div className='header section__padding'>
      <img className='shake-vertical' src={sealogo2} width={650} />
      <div className="header-content">
        <div>
          <h1>
            우리나라 멸종위기종 NFT 기부 플랫폼<br/><br/> 
            <h4>멸종위기 동물에게 토큰 기부하고 AI가 그려주는 <br/>
            동물 NFT 그림 증서 받아가세요!</h4>
          </h1>
          <img className='shake-vertical' src={coin} alt="" />
        </div>
      </div>

      {/* <img src={"https://pbs.twimg.com/profile_images/1403343064203239426/-9bH-cRS_400x400.jpg"} 
                className="App-logo" alt="logo" /> */}

      <Stack spacing={2}>
        <button className='button' onClick={connectHandler}>MetaMask 로그인</button>
        {errorMessage ? (
          <Typography variant="body1" color="red">
            Error: {errorMessage}
          </Typography>
        ) : null}
      </Stack>
      </div>
  );
};

export default LoginPage;