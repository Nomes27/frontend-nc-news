import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import LogIn from "./Components/LogIn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Router } from "@reach/router";
import ArticlesList from "./Components/ArticlesList";
import "./App.css";
import SingleArticle from "./Components/SingleArticle";
import Error from "./Components/Error";
import axios from "axios";

class App extends React.Component {
  //needs state - so username can be stored in here
  //and have user in app, not coming off app
  state = {
    username: "",
    userlogin: "",
    signedin: false,
    avatar: "",
  }; //userlogin so captures username once button has been clicked and passes down on props, otherwise there is the option to delete comments before button has actually been clicked
  handleChange = (event) => {
    let value = event.target.value;
    this.setState({ username: value });
  };

  submitForm = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://frontend-nc-news.herokuapp.com/api/users/${this.state.username}`
      )
      .then(({ data: { user } }) => {
        this.setState({
          userlogin: this.state.username,
          signedin: true,
          avatar: user.avatar_url,
        });
      });
    //this.setState({ username: "" });
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <form className="login_form">
            <input
              className="login_form_text"
              type="text "
              placeholder="username"
              onChange={this.handleChange}
            ></input>

            <input
              className="login_form_submit"
              type="submit"
              value="Login"
              onClick={this.submitForm}
            ></input>
          </form>
          {this.state.signedin && (
            <>
              <p className="login_message">
                You're logged in as {this.state.userlogin}
              </p>
              <img
                className="login_avatar"
                src={this.state.avatar}
                alt="avatar of logged in user"
              ></img>
            </>
          )}

          <Header />
          <NavBar />
        </header>

        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/articles/topics/:topic" />

          <SingleArticle
            userlogin={this.state.userlogin}
            signedin={this.state.signedin}
            path="/articles/:article_id"
          />
          <Error default />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
