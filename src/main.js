// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
  </main>  
);

export default Main;