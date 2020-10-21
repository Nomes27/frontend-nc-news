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
    commentid: null,
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
    return (
      <>
        <h2 className="comments_title">Comments</h2>
        <AddComment id={this.props.id} />

        {this.state.comments.map((comment, index) => {
          return (
            <section className="comments" key={comment.comment_id}>
              <h4>{comment.author}</h4>
              <p className="comments_body">{comment.body}</p>
              <h4>
                <button onClick={() => this.alterVote(1, comment.comment_id)}>
                  <ThumbUpIcon fontSize="small" style={{ fill: "green" }} />
                </button>
                {console.log(comment.comment_id)}
                {comment.comment_id === this.state.commentid ? ( //if the comment_id equals the same one in state then increase the count, else just return the count
                  <>{comment.votes + this.state.voteCount}</>
                ) : (
                  <>{comment.votes}</>
                )}
                <button onClick={() => this.alterVote(-1, comment.comment_id)}>
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
