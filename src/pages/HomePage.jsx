import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PopularPosts from "../components/PopularPosts";

function HomePage() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <PopularPosts />
      </div>
    </div>
  );
}

export default HomePage;
