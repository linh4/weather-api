import React, {Component} from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

export default class App extends Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}
