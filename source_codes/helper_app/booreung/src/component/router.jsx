import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GlobalStyle from "../style/global.css"
import Login from "../component/Auth/Login/Login";
import SignUp from "../component/Auth/SignUp/SignUp";
import SignupStep1 from "../component/SignupStep1";
import SignupStep2 from "../component/SignupStep2";
import SignupStep3 from "../component/SignupStep3";
import SignupStep4 from "../component/SignupStep4";
import News from "../page/News/News";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signup-step1" element={<SignupStep1 />} />
        <Route path="/signup-step2" element={<SignupStep2 />} />
        <Route path="/signup-step3" element={<SignupStep3 />} />
        <Route path="/signup-step4" element={<SignupStep4 />} />
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
