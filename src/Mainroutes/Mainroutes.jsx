import React from "react";
import { Route, Routes } from "react-router-dom";
import CardNav from "../pages/Homepage/Header&Footer/Header/cardnav/CardNav";
import Homepage from "../pages/Homepage/Homepage";
import Livescore from "../pages/Livescorepage/Livescore";
import MainNews from "../pages/Newspage/MainNews";
import SeriesPage from "../pages/SeriesPage/SeriesPage";
import Storypage from "../pages/Storypage/Storypage";
import Teampage from "../pages/Teampage/Teampage";
const Mainroutes = () => {
  return (
   
    <Routes>
      <Route path={"/livescore"} element={<Livescore></Livescore>}></Route>
      <Route path={"/cardnav"} element={<CardNav></CardNav>}></Route>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path={"/newspage"} element={<MainNews></MainNews>}></Route>
      <Route path="/seriespage" element={<SeriesPage />} />
      <Route path="/storypage/:id" element={<Storypage />} />
      <Route path="/teampage" element={<Teampage />} />
    </Routes>
  );
};

export default Mainroutes;
