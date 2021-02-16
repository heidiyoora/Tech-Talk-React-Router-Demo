import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import {setUrl} from './index';
import Sally from './Sally.jsx';
import Work from './clothes/Work.jsx';
import Dress from './clothes/Dress.jsx';
import Pajamas from './clothes/Pajamas.jsx';

export const App = () => {
  
  return (
    
    <Router>

      <nav>
        <Link to='/work'>
          <button> Work </button>
        </Link>
        <Link to='/datenight'>
          <button> Date Night </button>
        </Link>
        <Link to='/bedtime'>
          <button> Bedtime </button>
        </Link>
      </nav>

      <Sally/>


      <Switch>
        <Route path='/bedtime'>
          <Pajamas />
        </Route>
        <Route path='/work'>
          <Work />
        </Route>
        <Route path='/datenight'>
          <Dress />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;

