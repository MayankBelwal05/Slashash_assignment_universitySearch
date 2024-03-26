import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css'
import NavbarUp from "./Components/Navbar";
import AllRoutes from "./AllRoutes";
import { useState } from "react";


function App() {
  const [data, setData] = useState([]);
  return (
    <>
    <NavbarUp data={data} setData={setData}/>
    <AllRoutes data={data} setData={setData}/>
    </>
  )
}

export default App
