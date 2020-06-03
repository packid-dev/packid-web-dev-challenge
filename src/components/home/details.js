import React, { Component } from 'react';
import {Col} from 'react-materialize';
import Graphic from "./graphic";
import data from "../../sensor"; 
import Functions from "../functions/functions"; 

var leituras = data.measurements;

leituras = Functions.ajustarDatasVetor(leituras);
var estaNaFaixa = Functions.verificarFaixa( data.temperature_min, data.temperature_max, leituras[0].temperature);

class Details extends Component {
	render() {
		return (
            <div>
                <h5>Visualizando histórico de temperatura:</h5>
                <div key="sensor">
                    <Col s={12} m={6}>
                        <span>Nome: </span>
                        <span>{data.serial} - {data.label}</span>
                    </Col>
                    <Col s={12} m={6}>
                        <span>Faixa de Temperatura: </span>
                        <span>{data.temperature_min} à {data.temperature_max}</span>
                    </Col>
                    <Col s={12} m={6}>
                        <span>Média: </span>
                        <span>{(leituras.reduce((acumulador, elemento) => elemento.temperature + acumulador , 0)/leituras.length).toFixed(1)}</span>
                    </Col>
                    <Col s={12} m={6}>
                        <span>Última Temperatura: </span>
                        <span className={estaNaFaixa ? 'blue-text' : 'red-text'}>
                            {leituras[0].temperature} - {leituras[0].date_hour}
                        </span>
                    </Col>
                </div>
                <Graphic></Graphic>
            </div>
        );
    }
} 
export default Details;