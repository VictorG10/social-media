import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/create-post/CreatePost";
import Login from "./pages/Login";
import Main from "./pages/main/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
