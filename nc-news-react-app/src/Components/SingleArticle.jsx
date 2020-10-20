import React from "react";
import axios from "axios";

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true,
  };
  componentDidMount() {
    axios
      .get(
        `https://frontend-nc-news.herokuapp.com/api/articles/${this.props.article_id}`
      )
      .then(({ data: { article } }) => {
        this.setState({ article: article, isLoading: false });
      });
  }
  render() {
    if (this.state.isLoading) return <p>Article Loading...</p>;
    return (
      <article className="singleArticle">
        <h1>{this.state.article.title}</h1>
        <h3>{this.state.article.author}</h3>
        <p>{this.state.article.body}</p>
      </article>
    );
  }
}

export default SingleArticle;