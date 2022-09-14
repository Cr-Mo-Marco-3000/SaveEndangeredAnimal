import style from "./SortBar.module.css"
function SortBar() {
  return (
    <div className={style.sortBar}>
      <div className={style.sortBar_setting}>
        <div>전체</div>
        <div>위급</div>
        <div>위기</div>
        <div>취약</div>
      </div>
    </div>
  )
}

export default SortBar
