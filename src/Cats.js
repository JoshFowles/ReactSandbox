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

      <div className='Gallery'>
        <img className='image' src= {require('./assets/kitten.webp')} alt='cozyCat' />
        <img className='image' src= {require('./assets/cozyCat.webp')} alt='cozyCat' />
        <img className='image' src= {require('./assets/cuteCat.jpg')} alt='cozyCat' />
        <img className='image' src= {require('./assets/naughtyKitty.jpg')} alt='cozyCat' />
        <img className='image' src= {require('./assets/twoKitty.jpg')} alt='cozyCat' />
        <img className='image' src= {require('./assets/catInDistress.jpeg')} alt='cozyCat' />
        <img className='image' src= {require('./assets/wiseKitty.png')} alt='cozyCat' />
        <img className='image' src= {require('./assets/sphinxCat.jpg')} alt='cozyCat' />
        <img className='image' src= {require('./assets/weirdSleepCat.webp')} alt='cozyCat' />
        
        <img className='logo' src= {require('./assets/logoCat.webp')} alt='catDrawn' />

      </div>
    </div>


  );
}

export default Cats;
