import React from "react";
import axios from "axios";
import { Router, Link } from "@reach/router";

class NavBar extends React.Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    axios
      .get("https://frontend-nc-news.herokuapp.com/api/topics")
      .then(({ data: { topics } }) => {
        //topics key off the data key off the res object
        this.setState({ topics: topics });
      });
  }

  render() {
    return (
      <nav>
        {this.state.topics.map((topic) => {
          return (
            <Link to={`/topics/${topic.slug}`} key={topic.slug}>
              <button>{topic.slug}</button>{" "}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;
