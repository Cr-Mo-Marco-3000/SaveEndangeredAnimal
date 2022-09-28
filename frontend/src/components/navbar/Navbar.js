import { alpha, styled } from "@mui/material/styles"
import { Box, Stack, Button, AppBar, Toolbar } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import style from "./Navbar.module.css"
import React, {useEffect, useState} from 'react';
import Web3 from "web3"

const Navbar = () => {
  const APPBAR_MOBILE = 64
  const APPBAR_DESKTOP = 92

  const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    zIndex: "500",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    backgroundColor: alpha("#000000", 0.8),
  }))

  const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up("lg")]: {
      minHeight: APPBAR_DESKTOP,
      padding: theme.spacing(0, 5),
    },
  }))

  const navigate = useNavigate()

  const web3 = new Web3(window.ethereum);
  const [balance, setBalance] = useState();
  const [isaccount, setIsAccount] = useState(false);

  const getCurrentAccount = async() => {
    try {
      const currentAccounts = await web3.eth.getAccounts();
      // console.log(currentAccounts[0]);
      const bal = await web3.eth.getBalance(currentAccounts[0]);
      // console.log(balance);
      setBalance(bal);
      setIsAccount(true);
      // console.log(web3);
      return currentAccounts[0];
    } catch {
      console.log("err");
    }
  }

  useEffect(()=> {
    getCurrentAccount();
  },[]);

  return (
    <RootStyle>
      <ToolbarStyle>
        <div 
          onClick={() => navigate("/main")} className={style.logoDiv}>
          <img className={style.logo} src="/images/logo/sea.png" alt="logo" />
        </div>
        <Button
          className={style.logoCharacterButton}
          onClick={() => navigate("/main")}
        >
          <span className={style.logoCharacter}>S</span>
          <span className={style.logoCharacter}>E</span>
          <span className={style.logoCharacter}>A</span>
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <div className={style.navButtonDiv}>
          <button
            className={style.navButton}
            onClick={() => navigate("/main/express")}
          >
            나 표현하기
          </button>
          <hr className={style.navButtonUnderLine} />
        </div>
        <div className={style.navButtonDiv}>
          <button
            className={style.navButton}
            onClick={() => navigate("/main/animalList")}
          >
            기금 목록
          </button>
          <hr className={style.navButtonUnderLine} />
        </div>
        <div className={style.navButtonDiv}>
          <button
            className={style.navButton}
            onClick={() => navigate("/main/sale")}
          >
            판매페이지
          </button>
          <hr className={style.navButtonUnderLine} />
        </div>
        <div className={style.navButtonDiv}>
          <button
            className={style.navButton}
            onClick={() => navigate("/main/mypage")}
          >
            마이페이지
          </button>
          <hr className={style.navButtonUnderLine} />
        </div>
        <div className={style.navButtonDiv}>
          <button
            className={style.navButton}
            onClick={() => navigate("/main/minting")}
          >
            민팅페이지
          </button>
          <hr className={style.navButtonUnderLine} />
        </div>
      </ToolbarStyle>
    </RootStyle>
  )
}

export default Navbar
