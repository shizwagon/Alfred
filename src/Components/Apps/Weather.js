import React, { Component } from 'react';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: undefined,
            country: undefined,
            temperature: undefined,
            humidity: undefined,
            wind: undefined,
        };
    };
    static defaultProps = {
        city: 'Alameda',
    };
    _getWeatherInfo = (city) => {
        const main = this;
        let query = null;
        main.setState({
            infoStatus: 'loading'
        });
        if (!city || city === '') {
            query = this.props.city;
        } else {
            query = city;
        }
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=6ddaa3fbe4a729aa4c64e9339916e53f`)
            .then( function(response) {
                return response;
            })
            .then( function(response) {
                setTimeout( function() {
                    main.setState({
                        infoStatus: 'loaded'
                    });
                }, 300);
                return response.json();
            })
            .then( function(data) {
                main.setState({
                    city: data.name,
                    country: data.sys.country,
                    temperature: data.main.temp,
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                });
            })
            .catch( function() {
                main.setState({
                    infoStatus: 'error, data not loaded from API'
                });
            })
    };
    componentWillMount() {
        this._getWeatherInfo();
    };
    _handleSubmit = (event) => {
        event.preventDefault();
        this._getWeatherInfo(event.target.search.value);
    };
    render() {
        const {
            city,
            country,
            temperature,
            temp_max,
            temp_min,
            humidity,
            wind,
            infoStatus
        } = this.state;
        let data = null;
        if (infoStatus === 'loaded') {
            data = <div className="weatherInfo">
                <div className="cityName">
                    <div>{city} <span>({country})</span></div>
                </div>
                <div className="tempInfo">
                    <div>Temperature: <span>{temperature}º</span></div>
                    <div>High: <span>{temp_max}º</span></div>
                    <div>Low: <span>{temp_min}º</span></div>
                    <div>Humidity: <span>{humidity}%</span></div>
                    <div>Wind: <span>{(wind).toFixed(2)}mph</span></div>
                </div>
            </div>
        } else if (infoStatus === 'loading') {
            data = <div className="info loading">Loading weather data...</div>
        } else if (infoStatus === 'error') {
            data = <div className="info error">Error while loading weather data. Try again later.</div>
        }
        return (
            <div className="weatherApp">
                <div className="weatherQuery">
                    <form onSubmit={this._handleSubmit}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search a City..."
                        />
                    </form>
                </div>
                {data}
            </div>
        );
    };
}

