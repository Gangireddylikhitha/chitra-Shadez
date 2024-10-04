import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import HomeScreen from './chitraShades/homeScreen';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <HomeScreen/>
       
       
      </>
    </Router>
  );
}

export default App;
