// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import HomeScreen from './chitraShadesScreens/homeScreen'; // Your Home component
// import ArtCategory from './chitraShadesScreens/ArtCategory';
// import ArtGallery from './chitraShadesScreens/ArtGallery';
// import About from './chitraShadesScreens/aboutscreen';
// import Contact from '.';

// const App = () => {
//     return (
//         <Router>
//             <nav>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/art-category">Art Category</Link></li>
//                     <li><Link to="/art-gallery">Art Gallery</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                 </ul>
//             </nav>

//             <Switch>
//                 <Route exact path="/" component={HomeScreen} />
//                 <Route path="/art-category" component={ArtCategory} />
//                 <Route path="/art-gallery" component={ArtGallery} />
//                 <Route path="/about" component={About} />
//                 <Route path="/contact" component={Contact} />
//             </Switch>
//         </Router>
//     );
// };

// export default App;

















































































import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Navigation from './chitraShadesScreens/Navigation';

;

function App() {
  return (
    <Router>
      <>
        <Navbar />
      
       <Navigation/>
       
       
      </>
    </Router>
  );
}

export default App;
