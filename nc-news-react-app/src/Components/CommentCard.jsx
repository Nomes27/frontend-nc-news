import React from "react";
import axios from "axios";
import DeleteComment from "./DeleteComment";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

class CommentCard extends React.Component {
  state = {
    voteCount: 0,
    commentid: null,
  };

  alterVote = (voteValue, id) => {
    this.setState((prevState) => ({
      voteCount: prevState.voteCount + voteValue,
      commentid: id,
    }));
    axios.patch(`https://frontend-nc-news.herokuapp.com/api/comments/${id}`, {
      inc_votes: voteValue,
    });

    console.log("function working");
  };

  render() {
    const { comment } = this.props;

    return (
      <section className="comments">
        <h4>{comment.author}</h4>

        <p className="comments_body">{comment.body}</p>
        <h4>
          <button onClick={() => this.alterVote(1, comment.comment_id)}>
            <ThumbUpIcon fontSize="small" style={{ fill: "green" }} />
          </button>

          {comment.comment_id === this.state.commentid ? ( //if the comment_id equals the same one in state then increase the count, else just return the count
            <>{comment.votes + this.state.voteCount}</>
          ) : (
            <>{comment.votes}</>
          )}
          <button
            onClick={() => this.alterVote(-1, this.props.comment.comment_id)}
          >
            <ThumbDownIcon fontSize="small" color="secondary" />
          </button>
        </h4>
        <DeleteComment
          comment_id={comment.comment_id}
          author={comment.author}
          userlogin={this.props.userlogin}
        />
      </section>
    );
  }
}

export default CommentCard;
