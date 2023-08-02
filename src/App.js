import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>
      <Alert message="Baad me set karunga"/>
      <div className="container">

      <Routes>
      <Route exact path="/about" element = {<About/>}> </Route>
      <Route exact path="/" element = {<Home/>}> </Route>
      <Route exact path="/login" element = {<Login/>}> </Route>
      <Route exact path="/signup" element = {<Signup/>}> </Route>
      </Routes>
    
      </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
