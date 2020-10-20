import React from "react";
import Axios from "axios";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

class Comments extends React.Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    Axios.get(
      `https://frontend-nc-news.herokuapp.com/api/articles/${this.props.id}/comments`
    ).then(({ data }) => {
      //data off res
      console.log(data.comments);
      this.setState({ comments: data.comments });
    });
  }
  increaseVote(event) {
    console.log(event.target.value);
    console.log(event);
  }
  decreaseVote() {}

  render() {
    return (
      <>
        <h2>Comments</h2>
        {this.state.comments.map((comment) => {
          return (
            <section key={comment.comment_id}>
              <h4>{comment.author}</h4>
              <p>{comment.body}</p>
              <h4>
                <ThumbUpIcon
                  fontSize="small"
                  style={{ fill: "green" }}
                  onClick={this.increaseVote}
                  value={comment.votes}
                />
                {comment.votes}
                <ThumbDownIcon
                  fontSize="small"
                  color="secondary"
                  onClick={this.decreaseVote}
                />
              </h4>
            </section>
          );
        })}
      </>
    );
  }
}

export default Comments;
