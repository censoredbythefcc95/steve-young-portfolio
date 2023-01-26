import './App.css';
import AboutPage from '../src/components/AboutPage';
import ContactPage from '../src/components/ContactPage';
import WorkPage from '../src/components/WorkPage';
import HomePage from '../src/components/HomePage';
import NavBar from '../src/components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// It seems that react-router-dom is now using element instead of component to render routes.
function App() {
  return (
    <BrowserRouter>
    <div className="routes">
      <NavBar />
      <TransitionGroup>
        <CSSTransition classNames="slide" timeout={400}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mywork" element={<WorkPage />} />
      </Routes>
      </CSSTransition>
      </TransitionGroup>
    </div>
    </BrowserRouter>
  );
};



export default App;
