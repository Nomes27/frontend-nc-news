import React from "react";
import axios from "axios";
import Comments from "./Comments";
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
    console.log(this.state.article);
    if (this.state.isLoading) return <p>Article Loading...</p>;
    return (
      <>
        <article className="singleArticle">
          <h1>{this.state.article.title}</h1>
          <h3>{this.state.article.author}</h3>
          <p>{this.state.article.body}</p>
        </article>
        <Comments id={this.state.article.article_id} />
      </>
    );
  }
}

export default SingleArticle;
