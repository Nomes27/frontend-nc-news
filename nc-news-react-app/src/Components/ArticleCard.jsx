import React from "react";
import { Link } from "@reach/router";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteIcon from "@material-ui/icons/Favorite";
const ArticleCard = (props) => {
  return props.articles.map((article) => {
    return (
      <Link
        className="articleCard_link"
        to={`/articles/${article.article_id}`}
        key={article.article_id}
      >
        <section className="articleCard">
          <h2 className="articleCard_title">{article.title}</h2>

          <h3 className="articleCard_author">Posted by {article.author}</h3>

          <h4 className="articleCard_date">
            {String(new Date(article.created_at)).split("GMT")[0]}
          </h4>
          <h5 className="articleCard_votes">
            {article.votes} <FavoriteIcon style={{ fill: "#98af9e" }} />
          </h5>
          <h5 className="articleCard_comments">
            <MessageIcon />
            {article.comment_count} comments
          </h5>
        </section>
      </Link>
    );
  });
};

export default ArticleCard;
