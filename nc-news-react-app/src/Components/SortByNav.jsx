import React from "react";

import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import NewReleasesOutlinedIcon from "@material-ui/icons/NewReleasesOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
/*
import {
  FavoriteBorderOutlinedIcon,
  NewReleasesOutlinedIcon,
  TrendingUpIcon,
} from "@material-ui/icons";
*/
//passing sortbyfunc from articleslist to use in this component
const SortByNav = (props) => {
  return (
    <nav className="sortnavbar">
      <button
        className="sortnavbar_link"
        onClick={props.sortByFunc}
        value="created_at"
      >
        Newest
        <NewReleasesOutlinedIcon
          className="sortnavbar_icon"
          style={{ fill: "white" }}
        />
      </button>
      <button
        className="sortnavbar_link"
        onClick={props.sortByFunc}
        value="comment_count"
      >
        Most commented
        <TrendingUpIcon className="sortnavbar_icon" style={{ fill: "white" }} />
      </button>
      <button
        className="sortnavbar_link"
        onClick={props.sortByFunc}
        value="votes"
      >
        Most liked
        <FavoriteBorderOutlinedIcon
          className="sortnavbar_icon"
          style={{ fill: "white" }}
        />
      </button>
    </nav>
  );
};
export default SortByNav;
