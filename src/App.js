
//useful

import "./App.css";
import Header from "./components/Header";

// ROUTER
// import { BrowserRouter } from "react-router-dom";
// import { RouterConfig } from "./navigation/RouteConfig";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import VideoTut from "./pages/VideoTut";
import OurCareers from "./pages/OurCareers";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ForgatPwd from "./components/ForgatPwd";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header className="App-header"></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/NotFound" element={<NotFound />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/VideoTut" element={<VideoTut />}></Route>
          <Route path="/OurCareers" element={<OurCareers />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
          <Route path="/ForgatPwd" element={<ForgatPwd/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}







//  useless ,dont use//

// import "./App.css";
// import Home from "./pages/Home";
// import Header from "./components/Header";

// // ROUTER
// import { BrowserRouter } from "react-router-dom";
// import { RouterConfig } from "./navigation/RouteConfig";

// function App() {
//   return (
//     <div className="App">
//       <Header className="App-header"></Header>
//       <BrowserRouter>
//         <RouterConfig />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
