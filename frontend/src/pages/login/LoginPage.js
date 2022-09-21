import React, { useEffect, useState } from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'; 
import { ethers } from "ethers";

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
    <div>
      <img src={"https://pbs.twimg.com/profile_images/1403343064203239426/-9bH-cRS_400x400.jpg"} 
                className="App-logo" alt="logo" />

      <Stack spacing={2}>
        {/* <Typography variant="h6"> 지갑: {account} </Typography>
        <Typography variant="h6">
          잔고 : {balance} {balance ? "ETH" : null}
        </Typography> */}
        <Button onClick={connectHandler}>MetaMask 로그인</Button>
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