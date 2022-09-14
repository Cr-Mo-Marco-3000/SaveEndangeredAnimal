import style from "./AnimalList.module.css"
import AnimalItems from "./animalItems/AnimalItems"
import SortBar from "./sortBar/SortBar"

function AnimalList() {
  const animalList = [
    {
      animal_korean_name: "남방 큰돌고래",
      animal_scientific_name: "Tursiops aduncus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "취약",
      animal_type: "포유류",
      animal_image_address: "img/dolphin.png",
      animal_desc:
        "남방큰돌고래는 생김새에서 흔히 볼 수 있는 병코돌고래와 매우 비슷하다. 일반적인 병코돌고래는 상당히 튼튼한 몸집과 적당한 길이의 부리, 키가 크고 구부러진 등지느러미를 가지고 있지만, 남방큰돌고래는 몸집이 더 가늘고 부리는 더 길고 더 가늘다. 또한 남방큰돌고래는 다소 밝은 파란색을 띠는 경향이 있으며 곶은 일반적으로 더 뚜렷하며 밝은 spinal blaze가 등지느러미 아래로 확장된다. 남방큰돌고래는 수백 마리 정도 무리 지어 살지만, 5~15마리 정도의 무리가 가장 일반적이다. 종의 일부에서, 그들은 일반적인 병코돌고래와 혹등돌고래와 같은 다른 돌고래 종과 연관된다.",
    },
  ]
  return (
    <div className={style.animallist}>
      <SortBar />
      <AnimalItems animalList={animalList} />
    </div>
  )
}

export default AnimalList
