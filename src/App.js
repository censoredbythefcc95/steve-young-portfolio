import logo from './logo.svg';
import './App.css';
import AboutPage from '../src/components/AboutPage';
import ContactPage from '../src/components/ContactPage';
import WorkPage from '../src/components/WorkPage';
import NavBar from '../src/components/NavBar';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NavBar />
        <ContactPage />
        <WorkPage />
        <AboutPage />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
