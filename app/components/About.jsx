var React = require('react');

var About = (props) => {
  return (
    <div columns medium-6 large-4 small-centered>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React..</p>
      <p>
        Here are some of the tools used:
      </p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - Javascript framework used.</li>
      </ul>
      <ul>
        <li><a href="http://oepnweathermap.org">Open Weather Map</a> - Open Weather Map API is used to search for the weather data by city name.</li>
      </ul>
    </div>
  );
}

module.exports = About;
