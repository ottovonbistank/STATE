import React, { Component } from "react";
import "./App.css";
import Musiala from "./assets/Jamal Musiala.jpeg"

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "David Mutua",
        bio: "A passionate web developer and designer.",
        imgSrc: Musiala,
        profession: "Software Developer",
      },
      shows: false,
      mountedTime: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Profile App</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.fullName}</h2>
            <p><strong>Profession:</strong> {person.profession}</p>
            <p><strong>Bio:</strong> {person.bio}</p>
          </div>
        )}

        <p>Component mounted {mountedTime} seconds ago.</p>
      </div>
    );
  }
}

export default App;
