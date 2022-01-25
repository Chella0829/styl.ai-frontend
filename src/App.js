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
import Drawertoggle from "./Components/Sidedrawer/Drawertoggle";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

function App() {
  const [sideDraweropen, setSideDraweropen] = useState(false);
  let sideDrawer;
  let backdrop;
  // state = {
  //   Sidedraweropen: false
  // };
  const DrawertoggleClickHandler = () => {
    setSideDraweropen(!sideDraweropen);
    console.log(sideDraweropen);
  }

  const backDropClickHandler = () => {
    setSideDraweropen(false)
  }

  useEffect(() => {
    if(sideDraweropen) {
      // sideDrawer = <Sidedrawer />
      backdrop = <Backdrop  />
    }
  }, [sideDraweropen])
  // DrawertoggleClickHandler = () => {
  //   this.setstate((prevState) => {
  //     return {Sidedraweropen: !prevState.Sidedraweropen};
  //   });
  // };
  
  return (
    <div style={{height: '100%'}} className="App">
      
      <Router>  
      <Toolbar drawerClickHandler={DrawertoggleClickHandler}/>
      {/* <Sidedrawer />
      <Backdrop /> */}
      <Sidedrawer show={sideDraweropen}/>
      {sideDraweropen && <Backdrop onClick={backDropClickHandler} />}
      {/* {backdrop} */}
      {/* <main style={{marginTop:'64px'}}>
      </main>     */}
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/folders" element={<Folder />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<Resetpassword />} />
          <Route path="/folder/upload" element={<Upload />} />
          <Route path="/folder/question" element={<Question />} />
          <Route path="/package" element={<Package />} />
          <Route path="/folder/final-images" element={<Finalimages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;