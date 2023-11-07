import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherLayer = () => {
  const [data, setData] = useState(null); // Use null as the initial state

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const uri =
      "https://data.tmd.go.th/api/WeatherToday/V2/?uid=api&ukey=api12345&format=json";
    try {
      const response = await axios.get(uri);
      setData(response.data); // Store the response data in the state
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Weather Data</h2>
      {data ? (
        <div>
          <p>Location: {data.location}</p>
          <p>Temperature: {data.temperature}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherLayer;
