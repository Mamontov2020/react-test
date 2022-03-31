import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";
import profileData from "../data";
import { useState } from "react";

function Routing() {
  const [profile,setProfile]=useState(profileData);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home profile={profile} setProfile={setProfile} />}/>
        <Route path="/profile" element={<Profile profile={profile} setProfile={setProfile} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;