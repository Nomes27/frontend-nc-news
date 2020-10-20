import React from "react";
import { Link } from "@reach/router";
const ArticleCard = (props) => {
  return props.articles.map((article) => {
    return (
      <section className="articleCard" key={article.article_id}>
        <Link to={`/articles/${article.article_id}`}>
          <h2>{article.title}</h2>
        </Link>
        <h3>{article.author}</h3>
        <h4>{article.created_at}</h4>
        <h5>Votes: {article.votes}</h5>
        <h5>Comments: {article.comment_count}</h5>
      </section>
    );
  });
};

export default ArticleCard;
