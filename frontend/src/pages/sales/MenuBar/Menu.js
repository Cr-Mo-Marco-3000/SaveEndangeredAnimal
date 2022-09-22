import * as React from "react"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import api from "api/api.js"
import axios from "axios"

export default function Menu(props) {
  const [animalList, setAnimalList] = React.useState([])
  //그 중 선택한 동물 값 저장 변수
  const [animalName, setAnimalName] = React.useState("전체보기")
  //동물 리스트 불러올 때 쓸 useEffect

  //then 처리 내부
  //   React.useEffect(() => {
  //     axios
  //       .get("http://j7a506.p.ssafy.io:8080/api/v1/animal/name-list")
  //       .then((response) => {
  //         console.log(response.data.list)
  //         setAnimalList(response.data.list)
  //       })
  //   }, [])

  //then 이 외부?
  React.useEffect(() => {
    api.animal.getAnimalNameList().then((response) => {
      //console.log(response.list)
      setAnimalList([{ animalName: "전체보기" }, ...response.list])
    })
  }, [])

  //console.log(animalList)
  const handleChange = (event) => {
    setAnimalName(event.target.value)
    props.setAnimalName(event.target.value)
    //console.log(event.target.value)
  }
  return (
    <Stack spacing={6} direction="row">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">동물 종 선택하기</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={animalName}
          label="동물 종 선택하기"
          onChange={handleChange}
        >
          {animalList.map((animal) => (
            <MenuItem value={animal.animalName}>{animal.animalName}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained">판매내역</Button>
      <Button variant="contained">판매하기</Button>
    </Stack>
  )
}
