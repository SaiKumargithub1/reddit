import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import HomePage from "./pages/HomePage";
import "./assets/styles/global.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <HomePage />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
