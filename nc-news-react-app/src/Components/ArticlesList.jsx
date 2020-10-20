import React from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://frontend-nc-news.herokuapp.com/api/articles", {
        params: { topic: this.props.topic },
      })
      .then(({ data: { articles } }) => {
        this.setState({ articles, isLoading: false });
      });
  }
  componentDidUpdate(previousProps) {
    if (previousProps.topic !== this.props.topic) {
      axios
        .get("https://frontend-nc-news.herokuapp.com/api/articles", {
          params: { topic: this.props.topic },
        })
        .then(({ data: { articles } }) => {
          this.setState({ articles, isLoading: false });
        });
    }
  }

  render() {
    console.log(this.state);
    if (this.state.isLoading) return <p>Please wait, articles loading...</p>;
    return <ArticleCard articles={this.state.articles} />;
  }
}

export default ArticlesList;
