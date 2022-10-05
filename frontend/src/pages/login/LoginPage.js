import React, { useEffect, useState } from "react"
import { Button, Paper, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { ethers } from "ethers"
import api from "api/api"
import coin from "../login/coin.png"
import loading from "../login/loading.gif"
import sealogo3 from "../login/sealogo3.png"
import logo from "../../components/footer/sea.png"
import "./Login.css"
import Web3 from "web3"

const LoginPage = () => {
  const [haveMetamask, sethaveMetamask] = useState(true)
  const [isConnected, setIsConnected] = useState(false)

  const [errorMessage, setErrorMessage] = useState(null)
  const [account, setAccount] = useState(null)
  const [balance, setBalance] = useState(null)
  const [cookies, setCookie] = useCookies()
  const navigate = useNavigate()
  // const web3 = new Web3(window.web3.currentProvider);
  const web3 = new Web3(window.ethereum)

  const getCurrentAccount = async () => {
    try {
      const currentAccounts = await web3.eth.getAccounts()
      console.log(currentAccounts[0])
      const balance = await web3.eth.getBalance(currentAccounts[0])
      console.log(balance)
      console.log(web3)
      return currentAccounts[0]
    } catch {
      console.log("err")
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged)
      window.ethereum.on("chainChanged", chainChanged)
      getCurrentAccount()
    }

    const { ethereum } = window
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false)
      }
      sethaveMetamask(true)
    }
    checkMetamaskAvailability()
  }, [])

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        await accountsChanged(res[0])
        setIsConnected(true)
        api.user.login(res[0])
      } catch (err) {
        console.error(err)
        setErrorMessage("MetaMask 연결 에러")
      }
    } else {
      alert("MetaMask를 설치하세요.")
      setErrorMessage("MetaMask를 설치하세요.")
      window.open("https://metamask.io/download.html")
    }
  }

  const accountsChanged = async (newAccount) => {
    setAccount(newAccount)
    setCookie("id", newAccount)
    navigate("/main")
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      })
      setBalance(ethers.utils.formatEther(balance))
    } catch (err) {
      console.error(err)
      setErrorMessage("MetaMask 연결 에러")
    }
  }

  const chainChanged = () => {
    setErrorMessage(null)
    setAccount(null)
    setBalance(null)
  }

  return (
    <div className="header section__padding">
      <img className="shake-vertical" src={sealogo3} width={650} />
      <div className="header-content">
        <div>
          <h1>
            멸종위기 동물 NFT 기부 플랫폼
            <br />
            <br />
            <h4>
              멸종위기 동물에게 Ethereum 기부하고 <br />
              자신과 동물이 담긴 그림 NFT 받아가세요!
            </h4>
          </h1>
          <img className="shake-vertical" src={coin} alt="" />
        </div>
      </div>

      {/* <img src={"https://pbs.twimg.com/profile_images/1403343064203239426/-9bH-cRS_400x400.jpg"} 
                className="App-logo" alt="logo" /> */}

      <Stack spacing={2}>
        <button className="button" onClick={connectHandler}>
          METAMASK LOGIN
        </button>
        {errorMessage ? (
          <Typography variant="body1" color="red">
            Error: {errorMessage}
          </Typography>
        ) : null}
      </Stack>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default LoginPage
