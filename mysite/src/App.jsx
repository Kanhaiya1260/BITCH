import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductDesc from "./pages/ProductDesc";
import MNavbar from "./components/global/MNavbar";

const App = () => {
  

  return (
    <div>
      <MNavbar/>
      <Routes>
        <Route path='/product' exact element={<ProductDesc />} />
      </Routes>
    </div>
  );
};

export default App;

