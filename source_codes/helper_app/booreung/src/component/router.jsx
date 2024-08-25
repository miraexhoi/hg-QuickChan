import { BrowserRouter, Routes, Route } from "react-router-dom"
// import GlobalStyle from "../style/global.css"
import Login from "../component/Auth/Login/Login"
import SignUp from "../component/Auth/SignUp/SignUp"
import Main from "../page/Main/Main"
import News from "../page/News/News"

const Router = () => {
    return (
      <BrowserRouter>
        {/* <GlobalStyle /> */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router;