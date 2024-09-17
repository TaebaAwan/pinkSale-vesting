
"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import pinkswap from "../app/img/pinkswap.png";
import LaunchPads from "./Component/LaunchPads";
import LandingPage from "./Component/LandingPage";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Home() {
  const cardBlocks = [
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
  ];

  return (

    <div className="col-md-12">
    <div>
     
    </div>
    {/* <LaunchPads /> */}
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
       <Route path="/launchpads" element={<LaunchPads />}></Route>
      </Routes>
    </BrowserRouter>{" "}
  </div>
   
  );
}
