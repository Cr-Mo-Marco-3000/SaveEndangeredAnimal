import style from "./SortBar.module.css"
function SortBar(props) {
  const changeSort = (event) => {
    props.changeSort(event.target.innerText)
  }
  return (
    <div className={style.sortBar}>
      <div className={style.sortBar_setting}>
        <div>
          <button onClick={changeSort}>전체</button>
        </div>
        <div>
          <button onClick={changeSort}>위급</button>
        </div>
        <div>
          <button onClick={changeSort}>위기</button>
        </div>
        <div>
          <button onClick={changeSort}>취약</button>
        </div>
      </div>
    </div>
  )
}

export default SortBar
