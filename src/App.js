import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App f-height">
        <Navbar />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
