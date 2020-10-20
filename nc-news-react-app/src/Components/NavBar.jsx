import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import HomeIcon from "@material-ui/icons/Home";

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
        <Link to="/">
          <HomeIcon
            className="nav_home"
            aria-label="homepage"
            fontSize="large"
            style={{ fill: "red" }}
          />
        </Link>
        {this.state.topics.map((topic) => {
          return (
            <Link to={`/articles/topics/${topic.slug}`} key={topic.slug}>
              <button>{topic.slug}</button>{" "}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;
