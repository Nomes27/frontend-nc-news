import React from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import SortByNav from "./SortByNav";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
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
  sortByFunc = (event) => {
    console.log("function working");
    axios
      .get("https://frontend-nc-news.herokuapp.com/api/articles", {
        params: { topic: this.props.topic, sort_by: event.target.value },
      })
      .then(({ data: { articles } }) => {
        this.setState({ articles, isLoading: false });
      });
  };

  render() {
    if (this.state.isLoading) return <p>Please wait, articles loading...</p>;
    return (
      <>
        <SortByNav sortByFunc={this.sortByFunc} />
        <ArticleCard articles={this.state.articles} />
      </>
    );
  }
}

export default ArticlesList;
