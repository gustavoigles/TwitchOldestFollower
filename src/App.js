import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Followers from './components/Followers';


function App() {


  return (
    <Router>

    <Route exact path='/' component={Followers}></Route>

   </Router>
  );
}

export default App;
