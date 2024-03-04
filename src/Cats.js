import './App.css';

function Cats() {
  return (

    <div>

      <div className='Cat-header'>
        <h1>Bekah's Burmese</h1>
      </div>
      <div className='Breed-paragraph'>
        <p> Bringing you the best &nbsp;
          <span>
            <img style= {{width: '40px', height: '40px', verticalAlign: 'middle'}} src= {require('./assets/pinkHeart.jpg')} alt='heart' /></span> 
            &nbsp; Burmese kittens around!
          </p>
      </div>
    </div>


  );
}

export default Cats;
