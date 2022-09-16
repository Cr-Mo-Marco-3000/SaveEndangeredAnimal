import style from "./AnimalList.module.css"
import AnimalItems from "./animalItems/AnimalItems"
import SortBar from "./sortBar/SortBar"
import Pagination from "./pagination/Pagination"
import { useState } from "react"
function AnimalList() {
  const animalList = [
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "취약",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
    {
      animal_korean_name: "붉은늑대",
      animal_english_name: "",
      animal_scientific_name: "Canis rufus",
      animal_now_item: 46,
      animal_max_item: 100,
      animal_endangered_level: "위급",
      animal_type: "포유류",
      animal_image_address: "redWolf/1.jpg",
      animal_desc:
        "붉은늑대는 붉은 털, 은회색 이마, 흰 다리에 있는 어두운 반점, 크림색을 특징으로 하는 늑대의 일종입니다. 미국 텍사스, 루이지애나, 노스 캐롤라이나의 초원, 산림, 습지에서 서식했지만, 가축을 공격했기 때문에 목장주나 농장주들에 의해 무차별적으로 포획당했습니다. 그 결과 한때는 야생에서 멸종하기도 했습니다. 미국어류야생동물보호국(The U.S. Fish & Wildlife Service)에서는 이를 인지하고 붉은늑대의 개체 수 회복을 위해 계속해서 야생으로의 방사를 추진하고 있지만, 2020년 방사된 7마리 개체가 모두 밀렵되거나 로드킬 당하는 등 목표를 달성하는 데 어려움을 겪고 있습니다. 2012년 120여마리에 달했던 야생 개체수는 2021년 10월에는 8마리까지 줄어들었습니다.",
    },
  ]

  const [pageNumber, setPageNumber] = useState(1)
  const [sortedAnimalList, setSortedAnimalList] = useState(animalList)

  // 페이지 바꿔주는 함수
  const pageListner = function (data) {
    setPageNumber(data)
  }

  // 정렬 바꿔주는 함수
  const changeSort = function (data) {
    const tempList = []
    if (data === "전체") {
      setSortedAnimalList(animalList)
    } else {
      for (const i of animalList) {
        if (i.animal_endangered_level === data) {
          tempList.push(i)
        }
      }
      setSortedAnimalList(tempList)
    }
  }

  // 페이지 넘버에 맞추어서 보여줄 페이지를 잘라준다.
  const showedAnimalList = sortedAnimalList.slice(
    (pageNumber - 1) * 4,
    pageNumber * 4
  )

  return (
    <div className={style.animallist}>
      <SortBar changeSort={changeSort} />
      <AnimalItems animalList={showedAnimalList} />
      <Pagination changePage={pageListner} number={sortedAnimalList.length} />
    </div>
  )
}

export default AnimalList
