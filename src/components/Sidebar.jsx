import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="filter-by">
        <h3>FILTER BY</h3>
        <FontAwesomeIcon icon={faFilter} className="filter-icon" />
      </div>

      <div className="favourites">
        <h3>FAVOURITES</h3>
        <ul>
          <li>r/lovestory</li>
          <li>r/gamingfun</li>
          <li>r/funny</li>
          <li>r/breakingnews</li>
        </ul>
      </div>

      <div className="reddit-feeds">
        <h3>REDDIT FEEDS</h3>
        <ul>
          <li>r/pics</li>
          <li>r/gifs</li>
          <li>r/movies</li>
          <li>r/gaming</li>
        </ul>
      </div>

      <div className="community">
        <h3>COMMUNITY</h3>
        <ul>
          <li>r/funny</li>
          <li>r/AskReddit</li>
          <li>r/gaming</li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
