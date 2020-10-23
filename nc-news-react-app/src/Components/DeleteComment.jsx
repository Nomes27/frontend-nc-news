import React from "react";
import axios from "axios";

class DeleteComment extends React.Component {
  state = {
    show: false,
  };
  deleteFunc = () => {
    console.log("delete func working");

    axios.delete(
      `https://frontend-nc-news.herokuapp.com/api/comments/${this.props.comment_id}` //passed down comment_id on props from the commentcard
    );
    this.setState({ show: true });
  };

  render() {
    return (
      <section>
        <button
          onClick={this.deleteFunc}
          disabled={this.props.author !== this.props.userlogin}
          className="delete_button"
        >
          Delete Comment
        </button>
        {this.state.show && (
          <p className="deleteComment_message">Comment deleted!</p>
        )}
      </section>
    );
  }
}

export default DeleteComment;

//button should be disabled if user logged in is not the creator of the comment
