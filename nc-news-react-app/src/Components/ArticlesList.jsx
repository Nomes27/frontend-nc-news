import React from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

class ArticlesList extends React.Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    axios
      .get("https://frontend-nc-news.herokuapp.com/api/articles")
      .then(({ data: { articles } }) => {
        this.setState({ articles });
      });
  }

  render() {
    return <ArticleCard articles={this.state.articles} />;
  }
}

export default ArticlesList;
