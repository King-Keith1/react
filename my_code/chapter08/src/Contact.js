import React, { Component } from 'react';
import { Media, Form, Button, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Contact extends Component {
  state = {
      classmates: [
  { id: 1, name: 'Cadee', email: 'codee.withcadee@byte.com' },
  { id: 2, name: 'Ethan', email: 'ethanator@hackmail.com' },
  { id: 3, name: 'Courtney', email: 'courtsey_of_courtney@funmail.io' },
  { id: 4, name: 'David', email: 'teachinator.david@brainboost.edu' },
  { id: 5, name: 'Mieke', email: 'mieke.moves@moonbase.dev' },
  { id: 6, name: 'Marvelous', email: 'absolutely.marvelous@wow.com' },
  { id: 7, name: 'Lindo', email: 'lindo.logic@neuralhub.org' },
  { id: 8, name: 'Pierre', email: 'pierrefect.code@bonjour.dev' },
  { id: 9, name: 'Ronny', email: 'run.run.ronny@speedmail.net' },
  { id: 10, name: 'Sibu', email: 'sibu.saves@galaxymail.com' },
  { id: 11, name: 'Tom', email: 'tom.tornado@scriptstorm.dev' },
  { id: 12, name: 'Ulrich', email: 'ultimatecoding@master.com' }
]
  };

  render() {
  return (
    <div>
      <h2>Classmate Contact List</h2>
      {this.state.classmates.map(classmate => (
        <Media className="mb-3" key={classmate.id}>
          <Media.Body>
            <h5>{classmate.name}</h5>
            <p>
              Email: <a href={`mailto:${classmate.email}`} style={{ color: '#007bff', fontWeight: 'bold' }}>
                {classmate.email}
              </a>
            </p>
          </Media.Body>
        </Media>
      ))}
    </div>
  );
}

}

export default Contact;
