import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Finalimages from "./Components/Finalimages/Finalimages";
import Folder from "./Components/Folder/Folder";
import Login from "./Components/Loginform/Login";
import Package from "./Components/Package/Package";
import Question from "./Components/Question/Question";
import Register from "./Components/Registration/Register";
import Resetpassword from "./Components/Reset-password/Resetpassword";
import Upload from "./Components/Upload/Upload";
import Toolbar from "./Components/Toolbar/Toolbar";
import Sidedrawer from "./Components/Sidedrawer/Sidedrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import { useSelector } from "react-redux";  
import Admindashboard from "./Components/Dashboard/Admindashboard";

function App() {
  const userType = useSelector(state => state.login.user.type);

  const [sideDraweropen, setSideDraweropen] = useState(false);
  // const token = useState(null);

  let backdrop;
    

  const DrawertoggleClickHandler = () => {
    setSideDraweropen(!sideDraweropen);
    console.log(sideDraweropen);
  };

  const backDropClickHandler = () => {
    setSideDraweropen(false);
  };

  useEffect(() => {
    if (sideDraweropen) {
      backdrop = <Backdrop />;
    }
  }, [sideDraweropen]);

  return (
    <div style={{ height: "100%" }} className="App">
      <Router>
     
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/home" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/folders" element={<Folder />} />
            <Route path="/reset-password" element={<Resetpassword />} />
            <Route path="/folder/upload" element={<Upload />} />
            <Route path="/folder/question" element={<Question />} />
            <Route path="/package" element={<Package />} />
            <Route path="/folder/final-images" element={<Finalimages />} /> */}
        </Routes>
      </Router>

      {userType === "admin" && (
        <Router>
           <Toolbar drawerClickHandler={DrawertoggleClickHandler} />
          <Sidedrawer show={sideDraweropen} />
          {sideDraweropen && <Backdrop click={backDropClickHandler} />}
          <Toolbar drawerClickHandler={DrawertoggleClickHandler} />
          <Sidedrawer show={sideDraweropen} />
          {sideDraweropen && <Backdrop click={backDropClickHandler} />}
          <Routes>
          <Route path="/adminDashboard" element={<Admindashboard />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      )}

      {userType === "client" && (
        <Router>
           <Toolbar drawerClickHandler={DrawertoggleClickHandler} />
          <Sidedrawer show={sideDraweropen} />
          {sideDraweropen && <Backdrop click={backDropClickHandler} />}
          <Toolbar drawerClickHandler={DrawertoggleClickHandler} />
          <Sidedrawer show={sideDraweropen} />
          {sideDraweropen && <Backdrop click={backDropClickHandler} />}
          <Routes>
              <Route path="/home" element={<Dashboard />} />  
            <Route path="/folders" element={<Folder />} />
            <Route path="/reset-password" element={<Resetpassword />} />
            <Route path="/folder/upload" element={<Upload />} />
            <Route path="/folder/question" element={<Question />} />
            <Route path="/package" element={<Package />} />
            <Route path="/folder/final-images" element={<Finalimages />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
