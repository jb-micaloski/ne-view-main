import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import MyProfile from "./MyProfile.js";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  );
}
