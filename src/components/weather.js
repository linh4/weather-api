import React from 'react';

const Weather = props => {
  const convertTemp = () => props.temperature === null ? "" : Math.round(props.temperature * 9 / 5 + 32)
  const {temperature, city, humidity, description, error} = props
  return (<div>
    {city && <p>Location: {city}</p>}
    {temperature && <p>Temperature: {convertTemp()}</p>}
    {humidity && <p>Humidity: {humidity}</p>}
    {description && <p>Description: {description}</p>}
    {error && <p>{error}</p>}
  </div>)
}

export default Weather
