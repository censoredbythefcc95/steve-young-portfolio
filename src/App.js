import './App.css';
import AboutPage from '../src/components/AboutPage';
import ContactPage from '../src/components/ContactPage';
import WorkPage from '../src/components/WorkPage';
import NavBar from '../src/components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact component={WorkPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/mywork" component={WorkPage} />
          <Route path="/contact" component={ContactPage} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};



export default App;
