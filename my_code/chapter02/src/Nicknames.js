import React, { Component } from 'react';

class Nicknames extends Component {
  render() {
    const Nicknames = ["Pierre", "Keith", "Ben", "Benito"];

    let NicknameList = Nicknames.filter(name =>
      /[e]/i.test(name)
    );

    return (
      <div>
        <h3>These are my nicknames:</h3>
        <ol>
          {NicknameList.map((name, index) => (
            <ui key={index}>{name }</ui>
          ))}
        </ol>
      </div>
    );
  }
}

export default Nicknames;
