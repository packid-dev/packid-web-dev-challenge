import React, {useState, useCallback} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
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

    function getRecentTemperature(){
        var recentTemperature;
        var changingValue = sensor.measurements[0]['date_hour'];
        sensor.measurements.forEach(element => {
            if(changingValue > element.date_hour){
                changingValue = element.date_hour;
                recentTemperature = element.temperature;
            }
        });
        console.log(changingValue);
        return recentTemperature;
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
                        <p>{getRecentTemperature()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}