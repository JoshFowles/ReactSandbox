import './App.css';
import Cats from './Cats';
import Timer from './Timer.js';
import './assets/Flasher Gremlin.gif';
import { useState, useEffect } from 'react';

const App = () => {
  const [gremlins, setGremlins] = useState([]);
  const [gremlinNamesElements, setGremlinNamesElements] = useState(null);
  const [isTimer, setIsTimer] = useState(true);
  const [isCats, setIsCats] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGremlin, setSelectedGremlin] = useState(null);

  const API_URL = "http://localhost:5001/";

  useEffect(() => {
    setIsLoading(true);
    fetch('${API_URL}api/Gremlins-DB/Gremlins')
      .then(response => response.json())
      .then(gremlins => {
        setGremlins(gremlins);
        setSelectedGremlin(gremlins[0]); // Default to the first gremlin in the list
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const refreshGremlins = async () => {
      try {
        const response = await fetch(`${API_URL}api/Gremlins-DB/Gremlins`);
        const data = await response.json();
        setGremlins(data);

        const gremlinElements = data.map((gremlin, index) => (
          <span key={index}>{gremlin.name}</span>
        ));
        setGremlinNamesElements(gremlinElements);

      } catch (error) {
        console.error('Error fetching gremlins:', error);
      }
    };

    refreshGremlins();
  }, []);

  const handleGremlinChange = (event) => {
    const selectedGremlin = gremlins.find(gremlin => gremlin.name === event.target.value);
    setSelectedGremlin(selectedGremlin);
  };

  return (

    <div>
      {isLoading && <p>Loading...</p>}

      {/* This block of code is useful for checking if gremlins is null */}
      {/* {isLoading ? (
        <p>Loading...</p>
      ) : gremlins.length > 0 ? (
        <p>Text {gremlins[1].name}</p>
      ) : (
        <p>No data found</p>
      )} */}

      <div className={`Mohawk-header ${isCats ? 'Hidden' : ''} ${isTimer ? 'Hidden' : ''}`}>
        <div style={{
          backgroundImage: 'url(https://imgur.com/pYk8ItK.gif)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '600px',
          backgroundPosition: 'center',
        }}>
          <div style={{ margin: '0px 20px' }}>
            <h1 style={{ fontSize: '40px', color: '#FFFDD0' }}>
              Gremlins Emporium
            </h1>

            <a href="https://www.gremlns.com" style={{ fontSize: '15px', color: '#FFFDD0' }}>
              Additional Material Here
            </a>

            <div>
              <p style={{ color: '#FFFDD0' }}>
                This page will contain a lot of Gremlins
              </p>
            </div>
          </div>
        </div>

        <div className="Gremlins">
          <div>
            <p>This is {gremlinNamesElements && gremlinNamesElements[2]}</p>
            <img src={require('./assets/gizmoHides.gif')} alt='scaredGizmo' />
          </div>
          <div>
            <p>This is {gremlinNamesElements && gremlinNamesElements[5]} we don't have this gremlin yet, so this will do</p>
            <img src={require('./assets/Flasher Gremlin.gif')} alt='Flasher' />
          </div>
          <div>
            <p>This is {gremlinNamesElements && gremlinNamesElements[2]}</p>
            <img src={require('./assets/gizmoAwe.gif')} alt='amazedGizmo' />
          </div>
        </div>
        {/* Dropdown Container */}
        <div style={{
          position: 'relative',
          bottom: '0px',
          width: '100%',
          backgroundColor: '#FFFDD0',
          padding: '10px',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <label htmlFor="gremlin-select">Choose a Gremlin:</label>
          <select id="gremlin-select" onChange={handleGremlinChange} value={selectedGremlin?.name}>
            {gremlins.map((gremlin, index) => (
              <option key={index} value={gremlin.name}>
                {gremlin.name}
              </option>
            ))}
          </select>

          {selectedGremlin && (
            <div style={{ marginTop: '10px' }}>
              <p>You selected: {selectedGremlin.name}</p>
              <img src={require(`./assets/${selectedGremlin.name}.gif`)} alt={`./assets/${selectedGremlin.name}.webp`} />
            </div>
          )}
        </div>
      </div>

      <div>
        <button onClick={() => setIsCats(!isCats)}>This will take you to Cats</button>
      </div>

      <div>
        <button onClick={() => setIsTimer(!isTimer)}>This will take you to Timer</button>
      </div>

      <div className={`${isTimer ? '' : 'Hidden'}`}>
        <Timer />
      </div>

      <div className={`${isCats ? '' : 'Hidden'}`}>
        <Cats />
      </div>

      <form className="Input-Form">
        <label>
          Suggest New Gremlins
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
