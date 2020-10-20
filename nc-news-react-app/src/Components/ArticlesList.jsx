import React from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { Router } from "@reach/router";
class ArticlesList extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://frontend-nc-news.herokuapp.com/api/articles", {
        params: { topic: this.props.topic },
      })
      .then(({ data: { articles } }) => {
        this.setState({ articles });
      });
  }
  componentDidUpdate(previousProps) {
    if (previousProps.topic !== this.props.topic) {
      axios
        .get("https://frontend-nc-news.herokuapp.com/api/articles", {
          params: { topic: this.props.topic },
        })
        .then(({ data: { articles } }) => {
          this.setState({ articles });
        });
    }
  }

  render() {
    return <ArticleCard articles={this.state.articles} />;
  }
}

export default ArticlesList;
