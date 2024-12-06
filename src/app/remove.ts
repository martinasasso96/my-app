import { useEffect, useState } from "react";

const usePage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const prova = 'abc';

  useEffect(() => {
    // Setting the fetch options
    const options = { method: "GET", headers: { accept: "application/json" } };

    const x =
      "http://api.weatherapi.com/v1/current.json?key=b2e80483e1a74eadb5b143842240512&q=rome";

    /* "https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=YOUR_APY_KEY" */

    // Fetching weather data
    fetch(x, options)
      .then((response) => response.json())
      .then((data) => {
        // Set the weather data to state
        setWeatherData(data);
      })
      .catch((err) => {
        // Set the error to state if there is an error
        setError(err);
        console.error(err);
      });
  }, []);

  return { prova };
};

export default usePage;
