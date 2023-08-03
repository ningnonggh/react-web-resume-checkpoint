import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResumePage from './pages/ResumePage';
import Header from './components/Header';
import Footer from './components/Footer';

// import Profile from './components/Profile';
// import WhyHireMe from './components/WhyHireMe';
// import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<ResumePage />} />
        </Routes>
        <Footer/>
        
      </>
    </BrowserRouter>
  );
}

export default App;
