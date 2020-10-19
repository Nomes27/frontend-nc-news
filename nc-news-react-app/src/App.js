import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Router, Link } from "@reach/router";
import ArticlesList from "./Components/ArticlesList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ArticlesList />
      <Footer />
    </div>
  );
}

export default App;
