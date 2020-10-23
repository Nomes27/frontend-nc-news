import axios from "axios";
import React from "react";
class AddComment extends React.Component {
  //get id of article  this.props.id is the article_id which has been passed down from comments
  state = {
    comment: "",
    //username:"jessjelly"
    submitted: false,
  };
  onSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://frontend-nc-news.herokuapp.com/api/articles/${this.props.id}/comments`,
        {
          body: this.state.comment,
          username: this.props.userlogin, //so author is the logged in user
        }
      )
      .then((res) => {
        console.log(res.data.comment);
        this.props.addCommentFunc(res.data.comment);
      });
    this.setState({ comment: "", submitted: true });
  };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  render() {
    return (
      <>
        <form className="comments_post">
          <label htmlFor="body">Add a comment</label>
          <input
            className="comments_text"
            type="text"
            id="body"
            name="body"
            onChange={this.handleChange}
            value={this.state.comment}
          ></input>
          <button
            className="comments_button"
            value="Submit"
            onClick={this.onSubmit}
            disabled={!this.props.signedin} //signedin passed down on props-if not signed in, need to sign in to post comment
          >
            Submit
          </button>
          {!this.props.signedin && (
            <p className="errorMessage">
              You must be signed in to post a comment.
            </p>
          )}
        </form>
        {this.state.submitted && (
          <p className="successmessage">
            Your comment has been successfully posted
          </p>
        )}
      </>
    );
  }
}

export default AddComment;
