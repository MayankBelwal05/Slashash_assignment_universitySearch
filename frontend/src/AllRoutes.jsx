import { Route, Routes } from "react-router";
import Favourite from "./Components/Favourite";
import Homepage from "./Components/Homepage";

const AllRoutes = ({data, setData}) => {
  return (
    <>
      <Routes>
        <Route path="/Favourite" element={<Favourite/>} />
        <Route path="/" element={<Homepage data={data} setData={setData}/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;