import './App.css';
import Cats from './Cats';
import './assets/Flasher Gremlin.gif';
import {useState } from "react";

function App() {
  const [isCats, setIsCats] = useState(false);
  return (


    //setup background gif and header
    <div>
      <div className={`Mohawk-header ${isCats ? 'Hidden' : ''}`}>
        <div style={{
          backgroundImage: 'url(https://imgur.com/pYk8ItK.gif)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '600px',
          backgroundPosition: 'center',
          //textAlign: 'center'
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
            <p>This is one item</p>
            <img src={require('./assets/gizmoHides.gif')} alt='scaredGizmo' />
          </div>
          <div>
            <p>This is the second item</p>
            <img src={require('./assets/Flasher Gremlin.gif')} alt='Flasher' />
          </div>
          <div>
            <p>This is the third item</p>
            <img src={require('./assets/gizmoAwe.gif')} alt='amazedGizmo' />
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => setIsCats(!isCats)}>This will take you to Cats</button>
      </div>

      <div className= {`${isCats ? '' : 'Hidden'}`}>
        <Cats />
      </div>
    </div>


  );
}

export default App;
