import React from "react";
import Home from "../pages/Home";
import News from "../pages/News";
import Results from "../pages/Results";
import NotFound from "../pages/NotFound";
import Competition from "../pages/Competitions";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
