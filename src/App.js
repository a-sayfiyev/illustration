import './App.css';
import './index.css';

import girlPhoto from '../src/girl.jpeg';
import radioPhoto from '../src/radio.jpg';
import choynakPhoto from '../src/choynak.jpeg';
import carPhoto from '../src/car.jpeg';

import veloPhoto from '../src/velo.jpg';
import numberPhoto from '../src/174.jpeg';
import clockPhoto from '../src/clock.jpeg';



function App() {
  return (
    <div className="wrapper ">
    <header>
    <div className="container">
    <h1>Odam Luiran</h1>
    <nav>
    <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    </ul>
    </nav>
    </div>
    </header>

    <main>
    <div className="container">
    <h2>Illustrator</h2>

    <div class="grid-container">
    <div class="column">
    <div class="row">
    <img src={girlPhoto} alt="404"/>
    </div>
    <div class="row">
    <img src={radioPhoto} alt="404"/>


    </div>
    <div class="row">
    <img src={choynakPhoto} alt="404"/>
    </div>
    <div class="row">
    <img src={carPhoto} alt="404"/>
    </div>
    <div class="row">
    <img src={choynakPhoto} alt="404"/>
    </div>
    </div>

    <div class="column">
    <div class="row">
    <img src={veloPhoto} alt="404"/>
    </div>
    <div class="row">
    <img src={numberPhoto} alt="404"/>
    </div>
    <div class="row">
    <img src={clockPhoto} alt="404"/>
    </div>
    <div class="row">
    <img src={numberPhoto} alt="404"/>
    </div>
    </div>
    </div>
    </div>
    </main>

    <footer>
      <div className="container">
        <p>© 2035 by Odam Lviran. Powered and secured by Wix</p>
      </div>
    </footer>

    </div>
    );
  }

  export default App;
