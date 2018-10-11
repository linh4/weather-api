import React, {Component} from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
require('dotenv').config();

const key = process.env.REACT_APP_API_KEY;

export default class App extends Component {
  state = {
    temperature: null,
    city: null,
    humidity: null,
    description: null,
    error: null
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    const data = await res.json();
    console.log(data);
    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({...this.state, error: "Please enter value"})
    }
  }

  render() {
    const {temperature, city, humidity, description, error} = this.state
     return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={temperature}
          city={city}
          humidity={humidity}
          description={description}
          error={error}
        />
      </div>
    );
  }
}
