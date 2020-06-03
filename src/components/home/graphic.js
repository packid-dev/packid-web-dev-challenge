import React, { PureComponent  } from 'react';
import Functions from "../functions/functions"; 
// Importando os components necessários da lib recharts
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
 
import data from "../../sensor"; 

var aspecto = 2;
var leituras = data.measurements;
leituras = leituras.forEach(function(elemento){
  elemento.date_hour = (new Date(elemento.date_hour)).toLocaleString('pt-BR',{});
  elemento.max = data.temperature_max;
  elemento.min = data.temperature_min;
});

if(Functions.ismobile()){
  aspecto = 1;
}

export default class Graphic extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="90%" height="100%" aspect={aspecto}>
        <LineChart
          data={data.measurements}
          stackOffset="sign"
          margin={{
            top: 30, right: 0, left: 0, bottom: 80,
          }}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="date_hour" name="Data"/>
          <YAxis/>
          <Tooltip />
          <Line  type="monotone" name="Temperatura" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
