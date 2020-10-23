import React from "react";
import axios from "axios";
import Comments from "./Comments";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true,
    error: null,
    voteCount: 0,
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
  alterVote = (voteValue) => {
    this.setState((prevState) => ({
      voteCount: prevState.voteCount + voteValue,
    }));
    axios.patch(
      `https://frontend-nc-news.herokuapp.com/api/articles/${this.props.article_id}`,
      {
        inc_votes: voteValue,
      }
    );
  };

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
          <h2 className="singleArticle_title">{this.state.article.title}</h2>
          <button onClick={() => this.alterVote(1)}>
            <ThumbUpIcon fontSize="small" style={{ fill: "green" }} />
          </button>
          {this.state.article.votes + this.state.voteCount}
          <button onClick={() => this.alterVote(-1)}>
            <ThumbDownIcon fontSize="small" color="secondary" />
          </button>

          <h3>{this.state.article.author}</h3>
          <p>{this.state.article.body}</p>
        </article>
        <Comments
          id={this.state.article.article_id}
          userlogin={this.props.userlogin}
        />
      </>
    );
  }
}

export default SingleArticle;
