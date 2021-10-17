import axios from "axios";
import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [neighborhoods, setNeighborhoods] = useState(null);

  const getNeighborhoods = async () => {
    try {
      const { data } = await axios.get("/neighborhoods");
      setNeighborhoods(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="App-btn" onClick={() => getNeighborhoods()}>
          Get Neighborhoods
        </button>
        <div>
          <ul className="App-ul">
            {neighborhoods && neighborhoods.length > 0
              ? neighborhoods.map((neighborhood, i) => (
                  <li className="App-li" key={i}>
                    {neighborhood}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
