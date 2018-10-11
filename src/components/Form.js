import React from 'react';

const Form = (props) => (
  <div>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..."/>
      <button>Submit</button>
    </form>
  </div>
)

export default Form
