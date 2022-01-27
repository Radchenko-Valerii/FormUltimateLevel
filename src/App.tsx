import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import FirstStepPage from './pages/FirstStepPage/FirstStepPage';
import FourthStepPage from './pages/FourthStepPage/FourthStepPage';
import SecondStepPage from './pages/SecondStepPage/SecondStepPage';
import ThirdStepPage from './pages/ThirdStepPage/ThirdStepPage';
import FormState from './store/FormStore';
import {Header} from './components/Header';

function App() {
  console.log(FormState)
  return ( 
  <>
  <Header/>
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={FirstStepPage}/>
  <Route exact path="/step2" component={SecondStepPage}/>
  <Route exact path="/step3" component={ThirdStepPage}/>
  <Route exact path="/step4" component={FourthStepPage}/>
  </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;
