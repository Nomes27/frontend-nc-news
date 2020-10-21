import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

import { Router, Link } from "@reach/router";
import ArticlesList from "./Components/ArticlesList";
import "./App.css";
import SingleArticle from "./Components/SingleArticle";
import Error from "./Components/Error";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />

        <NavBar />
      </header>
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/articles/topics/:topic" />

        <SingleArticle path="/articles/:article_id" />
        <Error default />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
