import React from 'react';
import AnyChart from 'anychart-react';

import sensor from './sensor.json';

import './styles.css';

export default function Unique(){
    function getAVG(){
        var value = 0;
        sensor.measurements.forEach(element => {
            value += element.temperature;
        });
        return (value / sensor.measurements.length).toFixed(4);
    }

    function getRecentTemperature(option){
        var recentTemperature;
        var changingValue = sensor.measurements[0]['date_hour'];
        sensor.measurements.forEach(element => {
            if(changingValue <= element.date_hour){
                changingValue = element.date_hour;
                recentTemperature = element.temperature;
            }
        });

        if(option == 1){
            return recentTemperature;
        }else if(option == 2){
            if(recentTemperature < sensor.temperature_max && recentTemperature > sensor.temperature_min){
                return (
                    <span>Temperatura está na faixa.</span>
                );
            }else{
                return (
                    <span>Temperatura não está na faixa</span>
                );
            }
        }
    }

    function getInfoToGraph(){
        var infoArray = [];
        sensor.measurements.forEach(element => {
            infoArray.push(element.temperature);
        });
        return infoArray;
    }

    return(
        <div className="sensor-container">
            <div className="sensor-content">
                <div className="sensor-name">
                    <h2>{sensor.label}</h2>
                </div>

                <div className="sensor-range">
                    <h2>Faixa de temperatura</h2>
                    <p className="min">MIN: {sensor.temperature_min}</p>
                    <p className="max">MAX: {sensor.temperature_max}</p>
                </div>

                <div className="sensor-measurements">
                    <div className="sensor-measurements__avg">
                        <h2>Média de temperatura</h2>
                        <p>{getAVG()}</p>
                    </div>

                    <div className="sensor-measurements__recentTemperature">
                        <h2>Temperatura mais recente</h2>
                        <p>{getRecentTemperature(1)}</p>
                    </div>

                    <div className="sensor-measurements__range">
                        <h2>Temperatura está dentro da faixa?</h2>
                        <p>{getRecentTemperature(2)}</p>
                    </div>

                    <div className="sensor-measurements__graph">
                        <h2>Gráfico das leituras passadas</h2>
                        <AnyChart
                            type="column"
                            data={getInfoToGraph()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}