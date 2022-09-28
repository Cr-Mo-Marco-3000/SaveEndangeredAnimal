import axios from "axios"

const HOST = "http://j7a506.p.ssafy.io:8080/api/v1"
//const HOST = "http://localhost:8080/api/v1"

const USER = "/user"
const DONATION = "/donation"
const SALE = "/sale"
const ANIMAL = "/animal"
const ITEM = "/item"

const api = {
  /* ============== User  ============== */
  user: {
    // 로그인
    login: async (walletAddress) => {
      try {
        const res = await axios({
          url: HOST + USER + "/login",
          method: "POST",
          withCredentials: true,
          data: {
            walletAddress: walletAddress,
          },
        })
        return res.data
      } catch (error) {
        const res = error.res.data
        return res
      }
    },
    logout: async () => {
      try {
        const res = await axios({
          url: HOST + USER + "/logout",
          method: "GET",
          withCredentials: true,
        })
        return res.data
      } catch (error) {
        const res = error.res.data
        return res
      }
    },
    // 나를 표현하기 => list 그대로 넣기
    expression: async (testResult) => {
      try {
        const res = await axios({
          url: HOST + USER + "/test-result",
          method: "PUT",
          withCredentials: true,
          data: {
            list: testResult,
          },
        })
        //console.log("여기까지 옴?")
        return res
      } catch (error) {
        //console.log("에러")
        const response = error.res
        return response
      }
    },
    // 기존 검사 결과 얻기 => 아마 민팅할때 쓰겠죠?
    getExpressionsResult: async () => {
      try {
        const res = await axios({
          url: HOST + USER + "/test-result",
          method: "GET",
          withCredentials: true,
        })
        return res.data
      } catch (error) {
        const response = error.res.data
        return response
      }
    },

    // 사진 받아오기
    getPictureURL: async (animalName) => {
      try {
        const res = await axios({
          url: HOST + USER + "/test-result",
          method: "GET",
        })
        console.log("뇽뇽")
        const wordList = res.data
        const centence =
          wordList[0] +
          " " +
          animalName +
          " " +
          wordList[1] +
          " " +
          wordList[2] +
          " " +
          wordList[3]
        console.log(centence)
        const pictureRes = await axios({
          url: "http://j7a506.p.ssafy.io:8000/donation/get-image/" + centence,
          method: "GET",
        })
        const response = pictureRes.data.picture
        return response
      } catch (error) {
        const res = error.res.data
        return res
      }
    },
  },

  /* ============== Donation  ============== */
  donation: {
    // 기부하기
    donate: async (
      donationAmount,
      donationStatusCode,
      donationTransactionHash,
      animalId,
    ) => {
      try {
        const res = await axios({
          url: HOST + DONATION,
          method: "POST",
          withCredentials: true,
          data: {
            donationAmount: donationAmount,
            donationStatusCode: donationStatusCode,
            donationTransactionHash: donationTransactionHash,
            animalId: animalId,
          },
        })
        const data = res.data
        return data
      } catch (error) {
        const res = error.res.data
        return res
      }
    },
    // 기부 내역 살펴보기
    viewDonationLog: async (accessToken) => {
      try {
        const res = await axios({
          url: HOST + DONATION,
          method: "GET",
          headers: {
            Authorization: "Bearer " + accessToken,
          },
          withCredentials: true,
        })
        const data = res.data
        return data
      } catch (error) {
        const res = error.res.data
        return res
      }
    },
  },

  /* ============== Sale  ============== */
  sale: {
    // 판매 등록하기
    openSale: async (
      saleContractAddress,
      saleCashContractAddress,
      saleStartTime,
      saleEndTime,
      itemId,
    ) => {
      try {
        const res = await axios({
          url: HOST + SALE,
          method: "POST",
          withCredentials: true,
          data: {
            saleContractAddress: saleContractAddress,
            saleCashContractAddress: saleCashContractAddress,
            saleStartTime: saleStartTime,
            saleEndTime: saleEndTime,
            itemId: itemId,
          },
        })
        const data = res.data
        return data
      } catch (error) {
        const res = error.response.data
        return res
      }
    },
    // 전체 판매 목록 불러오기
    getSaleList: async () => {
      try {
        const res = await axios({
          url: HOST + SALE,
          withCredentials: true,
          method: "GET",
        })
        const data = res.data
        return data
      } catch (error) {
        const res = error.response.data
        return res
      }
    },
    // 판매 완료(DB용)
    saleSuccess: async (saleId, saleBuyerAddress) => {
      try {
        const res = await axios({
          url: HOST + SALE,
          method: "PUT",
          withCredentials: true,
          data: {
            saleId: saleId,
            saleBuyerAddress: saleBuyerAddress,
          },
        })
        const response = res.data
        return response
      } catch (error) {
        const res = error.response.data
        return res
      }
    },
    // 판매 상세보기 => 변수에 판매 번호를 넣으세요
    getSaleDetail: async (saleNumber) => {
      try {
        const res = await axios({
          url: HOST + SALE + `/${saleNumber}`,
          method: "GET",
          withCredentials: true,
        })
        const response = res.data
        return response
      } catch (error) {
        const response = error.response.data
        return response
      }
    },
    // 현재 판매중인 판매내역 불러오기
    getMyCurrentSale: async () => {
      try {
        const res = await axios({
          url: HOST + SALE + "/ex",
          method: "GET",
          withCredentials: true,
        })
        const response = res.data
        return response
      } catch (error) {
        const response = error.response.data
        return response
      }
    },
  },
  /* ============== Animal  ============== */
  animal: {
    // 동물 새로 등록
    registerAnimal: async (
      KoreanName,
      EnglishName,
      ScientificName,
      Description,
      Type,
      EndangeredLevel,
    ) => {
      try {
        const res = await axios({
          url: HOST + ANIMAL,
          withCredentials: true,
          method: "POST",
          data: {
            animalKoreanName: KoreanName,
            animalEnglishName: EnglishName,
            animalScientificName: ScientificName,
            animalDesc: Description,
            animalType: Type,
            animalEndangeredLevel: EndangeredLevel,
          },
        })
        const response = res.data
        return response
      } catch (error) {
        const response = error.response.data
        return response
      }
    },
    // 동물 이미지 등록 => 미완성
    // 동물 목록 불러오기
    getAnimalList: async () => {
      try {
        const res = await axios({
          url: HOST + ANIMAL,
          withCredentials: true,
          method: "GET",
        })
        const response = res.data
        return response
      } catch (error) {
        const response = error.response.data
        return response
      }
    },
    // 동물 상세보기
    getAnimalDetail: async (animalId) => {
      try {
        const res = await axios({
          url: HOST + ANIMAL + `/detail/${animalId}`,
          method: "GET",
          withCredentials: true,
        })
        const response = res.data
        return response
      } catch (error) {
        const response = error.response.data
        return response
      }
    },
    // 동물 이름만 리스트
    getAnimalNameList: async () => {
      try {
        const res = await axios({
          url: HOST + ANIMAL + `/name-list`,
          method: "GET",
          withCredentials: true,
        })
        const response = res.data
        return response
      } catch (error) {
        const response = error.response.data
        return response
      }
    },
    // 내가 기부한 동물 목록 => 보내주는 건 모든 동물 목록 보여줌
    getDonatedAnimalListByMe: async () => {
      try {
        const res = await axios({
          url: HOST + ANIMAL + `/my-list`,
          method: "GET",
          withCredentials: true,
        })
        const response = res.data
        return response
      } catch (error) {
        const response = error.response.data
        return response
      }
    },
  },
  /* ============== Item  ============== */
  item: {
    // NFT 등록
    registerItem: async (
      donationId,
      ImgUrl,
      TokenId,
      Title,
      animalId,
      KoreanName,
      Price,
    ) => {
      try {
        const res = await axios({
          url: HOST + ITEM,
          method: "POST",
          withCredentials: true,
          data: {
            donationId: donationId,
            itemImgUrl: ImgUrl,
            itemTokenId: TokenId,
            itemTitle: Title,
            animalId: animalId,
            animalKoreanName: KoreanName,
            itemPrice: Price,
          },
        })
        const response = res.data
        return response
      } catch (error) {
        const response = error.response.data
        return response
      }
    },
    // NFT 판매 완료시 NFT 정보 수정 => 추가 정보 어떤 게 필요?
    changeItem: async () => {
      try {
        const res = await axios({
          url: HOST + ITEM,
          withCredentials: true,
          method: "PUT",
        })
        const response = res.data
        return response
      } catch (error) {
        const response = error.response.data
        return response
      }
    },
    // NFT 작품 조회인데, 어떨 때 썼더라?
    // type에는 ALL이나 USER가 들어감
    getItem: async (type) => {
      try {
        const res = await axios({
          url: HOST + ITEM,
          method: "GET",
          withCredentials: true,
          params: {
            type: type,
          },
        })
        const response = res.data
        return response
      } catch (error) {
        const response = error.response.data
        return response
      }
    },
  },
}

export default api
