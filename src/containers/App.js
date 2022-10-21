import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const robotsApi = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const robotApi = await res.json();
    setRobots(robotApi);
  };

  useEffect(() => {
    robotsApi();
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <>
      {robots.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchfield={searchfield} searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )}
    </>
  );
};

export default App;
