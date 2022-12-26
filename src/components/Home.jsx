import React from 'react';
import '../styles/home.css'
import rankings from '../images/rankings.png'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to World of Warcraft PvP Stats!</h1>
      </div>
      <div className="features">
        <div className="feature">
          <Link to="/rankings" style={{textDecoration: 'none'}}>
            <img src={rankings} alt="Arena rankings" />
            <h2>Rankings</h2>
            <p>Check out arena rankings.</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/teams" style={{textDecoration: 'none'}}>
            <img src="https://i.imgur.com/gDUz1LK.jpg" alt="Team Compositions" />
            <h2>Team Compositions</h2>
            <p>Check out the best composition teams.</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/patch-notes" style={{textDecoration: 'none'}}>
            <img src="https://i.imgur.com/gDUz1LK.jpg" alt="Patch notes" />
            <h2>Patch Notes</h2>
            <p>Stay tuned to the latest patch notes.</p>
          </Link>
        </div>
      </div>
      <div className="cta">
        <div>Get notified for the most important changes!</div>
        <Link to="/sign-up" style={{textDecoration: 'none'}}>
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Home