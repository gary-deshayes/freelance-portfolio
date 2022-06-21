import React from "react";
import "./body.scss";
import Technology from "../Technology/Technology";
import Front from "../../settings/front.json";
import Back from "../../settings/back.json";
import Bdd from "../../settings/bdd.json";
import Devops from "../../settings/devops.json";

class Body extends React.Component {
  render() {
    return (
      <div id="body">
        <div class="front">
          <h2>Front</h2>
          {Front.map((item) => (
            <Technology data={item} key={item.id} />
          ))}
        </div>
        <div class="back">
          <h2>Back</h2>
          {Back.map((item) => (
            <Technology data={item} key={item.id} />
          ))}
        </div>
        <div class="back">
          <h2>Base de données</h2>
          {Bdd.map((item) => (
            <Technology data={item} key={item.id} />
          ))}
        </div>
        <div class="back">
          <h2>DevOps</h2>
          {Devops.map((item) => (
            <Technology data={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Body;
