import './App.css';
import AboutPage from '../src/components/AboutPage';
import ContactPage from '../src/components/ContactPage';
import WorkPage from '../src/components/WorkPage';
import NavBar from '../src/components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// It seems that react-router-dom is now using element instead of component to render routes.
function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mywork" element={<WorkPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};



export default App;
