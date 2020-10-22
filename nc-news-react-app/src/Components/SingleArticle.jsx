import React from "react";
import axios from "axios";
import Comments from "./Comments";
class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true,
    error: null,
  };
  componentDidMount() {
    axios
      .get(
        `https://frontend-nc-news.herokuapp.com/api/articles/${this.props.article_id}`
      )
      .then(({ data: { article } }) => {
        this.setState({ article: article, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          error: {
            status: err.response.status,
            message: err.response.data.msg,
          },
        });
      });
  }
  render() {
    if (this.state.error !== null)
      return (
        <p className="errorMessage">
          Error! status {this.state.error.status} - {this.state.error.message}
        </p>
      );
    else if (this.state.isLoading) return <p>Article Loading...</p>;
    return (
      <>
        <article className="singleArticle">
          <h1 className="singleArticle_title">{this.state.article.title}</h1>
          <h3>{this.state.article.author}</h3>
          <p>{this.state.article.body}</p>
        </article>
        <Comments id={this.state.article.article_id} />
      </>
    );
  }
}

export default SingleArticle;
