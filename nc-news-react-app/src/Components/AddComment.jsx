import axios from "axios";
import React from "react";
class AddComment extends React.Component {
  //get id of article  this.props.id is the article_id which has been passed down from comments
  state = {
    comment: "",
    username: "jessjelly",
  };
  onSubmit = (event) => {
    event.preventDefault();
    axios.post(
      `https://frontend-nc-news.herokuapp.com/api/articles/${this.props.id}/comments`,
      {
        body: this.state.comment,
        username: this.state.username,
      }
    );
    console.log("submit function working"); //send off comment from state
  };
  //axios.post

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  render() {
    return (
      <form className="comments_post">
        <label htmlFor="body">Add a comment</label>
        <input
          type="text"
          id="body"
          name="body"
          onChange={this.handleChange}
        ></input>
        <input type="submit" value="Submit" onClick={this.onSubmit}></input>
      </form>
    );
  }
}

export default AddComment;
