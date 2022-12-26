import Navigation from './navigation/Navigation';
import Home from './components/Home'
import Rankings from './components/Rankings'
import Teams from './components/Teams'
import Contact from './components/Contact';
import PatchNotes from './components/PatchNotes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rankings" element={<Rankings/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/patch-notes" element={<PatchNotes/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
