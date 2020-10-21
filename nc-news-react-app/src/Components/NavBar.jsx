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
            style={{ fill: "white" }}
          />
        </Link>
        <div className="nav_container">
          {this.state.topics.map((topic) => {
            return (
              <Link to={`/articles/topics/${topic.slug}`} key={topic.slug}>
                <button className="nav_link">
                  {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
                  {/*make topics have cap letters */}
                </button>{" "}
              </Link>
            );
          })}
        </div>
      </nav>
    );
  }
}

export default NavBar;
