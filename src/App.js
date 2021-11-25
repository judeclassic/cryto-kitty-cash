import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom' 

// locomotive scroll
import './styles/base.scss';

// Home
import { Home } from './pages'
import { Presale } from './pages'
import { Faq } from './pages'

// URL
import { url } from "./adapter"




function App() {
  return (
    <Router>
      <Switch>
            
          <Route path={url.home} exact component={Home} />
          <Route path={url.presale} exact component={Presale} />
          <Route path={url.faq} exact component={Faq} />

      </Switch>
    </Router> 
  );
}

export default App;



