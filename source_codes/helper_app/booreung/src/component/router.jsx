import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GlobalStyle from "../style/global.css"
import Login from "../component/Auth/Login/Login";
import SignUp from "../component/Auth/SignUp/SignUp";
import SignupStep1 from "../component/SignupStep1";
import SignupStep2 from "../component/SignupStep2";
import SignupStep3 from "../component/SignupStep3";
import News from "../page/News/News";
import CallTexi1 from "../page/CallTexi/CT1/CallTexi1";
import CallTexiL from "../page/CallTexi/CTL/CallTexiL";
import CallTexi2 from "../page/CallTexi/CT2/CallTexi2";

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
        <Route path="/calltexi1" element={<CallTexi1 />} />
        <Route path="/calltexi2" element={<CallTexi2 />} />
        <Route path="/calltexisuccess" element={<CallTexiL />} />
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
