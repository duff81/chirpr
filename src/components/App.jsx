import React, { Component } from "react";
import Timeline from "./Timeline.jsx";
import NewChirp from "./NewChirp";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirpArray: [
        { author: "john", content: "hi" },

        { author: "tom", content: "gonna get that pesky mouse" },

        { author: "Jim", content: "ahhhhhh" },
      ],
      author: "", 
      content: ""
    };
  }
  handleAuthorInput = (event) => this.setState({ author: event.target.value });
  handleContentInput = (event) => this.setState({ content: event.target.value });
  handleSubmit = (e) => {
      e.preventDefault();

      const newChirp = {
          author: this.state.author,
          content: this.state.content
      };

      this.setState({ chirpArray: [...this.state.chirpArray, newChirp ]});
  };

  render() {
    return (
      <React.Fragment>
        <div className="header">
          
         
        
        <NewChirp 
            author={this.state.author}
            content={this.state.content}
            handleAuthorInput={this.handleAuthorInput}
            handleContentInput={this.handleContentInput}
            handleSubmit={this.handleSubmit}
        /></div>
        <Timeline chirps={this.state.chirpArray} />;
      </React.Fragment>
    );
  }
}

export default App;
