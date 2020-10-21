import React from "react";
import axios from "axios";
import AddComment from "./AddComment";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

/*import { ThumbUpIcon, ThumbDownIcon } from "@material-ui/icons";*/

class Comments extends React.Component {
  state = {
    comments: [],
    voteCount: 0,
  };

  componentDidMount() {
    axios
      .get(
        `https://frontend-nc-news.herokuapp.com/api/articles/${this.props.id}/comments`
      )
      .then(({ data }) => {
        //data off res

        this.setState({ comments: data.comments });
      });
  }
  alterVote = (voteValue) => {
    this.setState((prevState) => ({
      voteCount: prevState.voteCount + voteValue,
    }));
    //PATCH /api/comments/:comment_id
    /*
    Axios.patch(
      `https://frontend-nc-news.herokuapp.com/api/comments/${}`,
      { inc_votes: 1 }
    );*/

    console.log("function working");
  };

  render() {
    return (
      <>
        <h2 className="comments_title">Comments</h2>
        <AddComment id={this.props.id} />

        {this.state.comments.map((comment) => {
          return (
            <section className="comments" key={comment.comment_id}>
              <h4>{comment.author}</h4>
              <p className="comments_body">{comment.body}</p>
              <h4>
                <button onClick={() => this.alterVote(1)}>
                  <ThumbUpIcon fontSize="small" style={{ fill: "green" }} />
                </button>
                {comment.votes + this.state.voteCount}
                <button onClick={() => this.alterVote(-1)}>
                  <ThumbDownIcon fontSize="small" color="secondary" />
                </button>
              </h4>
            </section>
          );
        })}
      </>
    );
  }
}

export default Comments;
