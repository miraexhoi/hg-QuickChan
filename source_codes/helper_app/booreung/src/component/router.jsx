import { BrowserRouter, Routes, Route } from "react-router-dom"
// import GlobalStyle from "../style/global.css"
import Login from "../component/Auth/Login/Login"
import SignUp from "../component/Auth/SignUp/SignUp"
import Main from "../page/Main/Main"

const Router = () => {
    return (
      <BrowserRouter>
        {/* <GlobalStyle /> */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router;