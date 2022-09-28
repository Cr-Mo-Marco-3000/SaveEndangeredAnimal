import styles from "./ExpressionResult.module.css"
import api from "../../../api/api.js"
import { useNavigate } from "react-router-dom"

const ExpressionResult = (props) => {
  const result = props.results
  //console.log(result)
  const uploadResult = props.uploadResult
  const navigate = useNavigate()
  const findAnimal = () => {
    uploadResult()
    navigate("/main/animalList")
  }
  return (
    <div className={styles.expressionStart}>
      <div className={styles.expressionHeader}>
        <h1>여행의 끝, 그리고 또 다른 시작</h1>
      </div>
      <div className={styles.imageDiv}>
        <img
          className={styles.image}
          src={require("resources/img/expression/start.jpg")}
          alt="사진"
        />
      </div>
      <div className={styles.textDiv}>
        <div className={styles.text}>
          당신은 <span className={styles.colorSpan}>{result[0]}</span>에서
          <span className={styles.colorSpan}>
            {" " + result[1].slice(0, -1)}
          </span>
          는 <span className={styles.colorSpan}>{result[2]}</span>이에요.
          <br />
          <br />
          멸종 위기 동물들은
          <span className={styles.colorSpanLast}>{" " + result[3]}</span> 세상
          속에서는 당신과 함께 할 수 있지만
        </div>
        <button onClick={findAnimal} className={styles.startButton}>
          동물들을 찾으러 가기
        </button>
      </div>
    </div>
  )
}

export default ExpressionResult
