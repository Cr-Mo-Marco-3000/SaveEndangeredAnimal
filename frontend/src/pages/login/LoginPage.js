import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from '../main/Mainpage'

export default function LoginPage() {
    return(
    <div>
        <div>
            메타마스크 로그인 할 페이지
        </div>
        <div>
            로그인 하면 바로 main ㄱㄱ
        </div>
        <Link to="/main">
          <button>
            로그인버튼 누르면 메인 페이지 감
          </button>
        </Link>
    </div>
    )
}