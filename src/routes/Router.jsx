import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from '../components/details/Details';
import Home from '../components/Home';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router
