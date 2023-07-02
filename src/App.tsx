import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Checkout from './components/Checkout';
import Home from './pages/Home';
import TopBox from './components/TopBox';

const App: React.FC = () => {
  return (
    <>
      <div className='stars -z-10'></div>
      <div className='container mx-auto h-full'>
        <TopBox />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;