import { Link } from 'react-router-dom';
import '../styles/navigation.css'
import { WEB_NAME } from '../constants';

function Navigation() {
    return (
      <nav>
        <div className="left">
          <Link to="/"><h1>{WEB_NAME}</h1></Link>
        </div>
        <div className="right">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rankings">Rankings</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/patch-notes">Patch Notes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navigation;