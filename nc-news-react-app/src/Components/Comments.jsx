import React from "react";
import axios from "axios";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";

/*import { ThumbUpIcon, ThumbDownIcon } from "@material-ui/icons";*/

class Comments extends React.Component {
  state = {
    comments: [],
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

  render() {
    return (
      <>
        <h2 className="comments_title">Comments</h2>
        <AddComment id={this.props.id} />
        {this.state.comments.map((comment) => {
          return <CommentCard comment={comment} />;
        })}
      </>
    );
  }
}

export default Comments;
