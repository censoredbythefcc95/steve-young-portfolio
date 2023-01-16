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
        <NavBar />
        <ContactPage />
        <WorkPage />
        <AboutPage />
    </div>
    </BrowserRouter>
  );
}

export default App;
