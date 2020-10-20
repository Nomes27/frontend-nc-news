import React from "react";
import axios from "axios";

class SingleArticle extends React.Component {
  state = {
    article: [],
  };
  componentDidMount() {
    axios
      .get(
        `https://frontend-nc-news.herokuapp.com/api/articles/${this.props.article_id}`
      )
      .then(({ data: { article } }) => {
        this.setState({ article: article });
      });
  }
  render() {
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
