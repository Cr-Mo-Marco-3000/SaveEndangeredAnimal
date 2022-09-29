import style from "./loadingSpinner.module.css"
const LoadingSpinner = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <img
          className={style.loadingGif}
          src="/images/logo/loading.gif"
          alt="로딩스피너"
        />
      </div>
      <div className={style.loadingText}>Loading...</div>
    </div>
  )
}

export default LoadingSpinner
