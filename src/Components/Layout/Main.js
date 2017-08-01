/**
 * Created by Trent on 7/25/2017.
 */
import React, { Component } from 'react';
import Weather from '../Apps/Weather';
import MapContainer from '../Apps/MapContainer';
import './Main.css'

export default class Main extends Component {

    render() {
        return (
            <div className="Main">
                <div className="Weather">
                    <Weather />
                </div>
                <div className="MapContainer">
                    <MapContainer />
                </div>
            </div>
        );
    }
}

