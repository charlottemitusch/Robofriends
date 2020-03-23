import React from "react";
import CardList from "../components/CardList";
//import { robots } from "./robots.js";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ``
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSchange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1> RoboFriends </h1> <SearchBox schange={this.onSchange} />{" "}
        <Scroll>
          <CardList robots={filterRobots} />{" "}
        </Scroll>{" "}
      </div>
    );
  }
}

export default App;
