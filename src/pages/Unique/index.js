import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
import sensor from './sensor.json';

import './styles.css';

export default function Unique(){
    function getAVG(){
        var value = 0;
        for(var i = 0; i <= sensor.measurements.length; i++){
            value += sensor.measurements[1]['temperature'];
        }
        return (value / sensor.measurements.length).toFixed(4);
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
                    
                </div>
            </div>
        </div>
    );
}