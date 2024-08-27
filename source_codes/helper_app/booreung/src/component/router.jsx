import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GlobalStyle from "../style/global.css"
import Login from "../component/login/LoginPage";
import SignupStep1 from "../component/signup/SignupStep1";
import SignupStep2 from "../component/signup/SignupStep2";
import SignupStep3 from "../component/signup/SignupStep3";
import News from "../page/News/News";
import CallTexi1 from "../page/CallTexi/CT1/CallTexi1";
import CallTexiL from "../page/CallTexi/CTL/CallTexiL";
import CallTexi2 from "../page/CallTexi/CT2/CallTexi2";
import CallTexi3 from "../page/CallTexi/CT3/CallTexi3";
import Main from "../page/Main/Main";
import StartPage from "./start_page/StartPage";
import Mypage from "../page/Mypage/Mypage";
import ManageTel from "../page/Manage/ManageTel";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup-step1" element={<SignupStep1 />} />
        <Route path="/signup-step2" element={<SignupStep2 />} />
        <Route path="/signup-step3" element={<SignupStep3 />} />
        <Route path="/calltexi1" element={<CallTexi1 />} />
        <Route path="/calltexi2" element={<CallTexi2 />} />
        <Route path="/calltexi3" element={<CallTexi3 />} />
        <Route path="/calltexisuccess" element={<CallTexiL />} />
        <Route path="/news" element={<News />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/managetel" element={<ManageTel />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
