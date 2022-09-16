import { useState } from "react"
import styles from "./ExpressionPage.module.css"
import ExpressionStart from "./expressionStart/ExpressionStart"
import ExpressionResult from "./expressionResult/ExpressionResult"
import ExpressionLevel1 from "./expressionLevels/ExpressionLevel1"
import ExpressionLevel2 from "./expressionLevels/ExpressionLevel2"
import ExpressionLevel3 from "./expressionLevels/ExpressionLevel3"
import ExpressionLevel4 from "./expressionLevels/ExpressionLevel4"

const ExpressionPage = () => {
  const [level, setLevel] = useState(1)
  const [wordList, setWordList] = useState([])

  const up = () => {
    setLevel(level + 1)
  }

  const down = () => {
    setLevel(level - 1)
  }

  return (
    <div className={styles.ExpressionPage}>
      {level === 1 ? <ExpressionStart /> : null}
      {level === 2 ? <ExpressionLevel1 wordList={wordList} /> : null}
      {level === 3 ? <ExpressionLevel2 wordList={wordList} /> : null}
      {level === 4 ? <ExpressionLevel3 wordList={wordList} /> : null}
      {level === 5 ? <ExpressionLevel4 wordList={wordList} /> : null}
      {level === 6 ? <ExpressionResult wordList={wordList} /> : null}
      <div>
        {!(level === 1) ? <button onClick={down}>이전</button> : null}
        {!(level === 6) ? <button onClick={up}>다음</button> : null}
      </div>
    </div>
  )
}

export default ExpressionPage
