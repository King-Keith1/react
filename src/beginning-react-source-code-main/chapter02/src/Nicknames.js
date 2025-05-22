import React, {Component} from "react";

class Nicknames extends Component {
  render() {
    let Nicknames = ["Pierre", "Keith", "Ben", "Benito"];

    let NicknameList = Nicknames.every(name =>
      /[e]/i.test(name)
    );

    return (
      <div>
        <h2>Nicknames</h2>
        <ul>{NicknameList}</ul>
      </div>
    );

  }
}

export default Nicknames;