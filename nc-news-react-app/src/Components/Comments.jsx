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
  incVote(event) {
    //PATCH /api/comments/:comment_id
    /*
    Axios.patch(
      `https://frontend-nc-news.herokuapp.com/api/comments/${}`,
      { inc_votes: 1 }
    );*/
    console.log(event.target);

    console.log("function working");
  }

  render() {
    return (
      <>
        <h2 className="comments_title">Comments</h2>
        {this.state.comments.map((comment) => {
          return (
            <section className="comments" key={comment.comment_id}>
              <h4>{comment.author}</h4>
              <p className="comments_body">{comment.body}</p>
              <h4>
                <ThumbUpIcon
                  fontSize="small"
                  style={{ fill: "green" }}
                  value={comment.votes}
                  onClick={this.incVote}
                />
                {comment.votes}
                <ThumbDownIcon
                  fontSize="small"
                  color="secondary"
                  onClick={this.decVote}
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
