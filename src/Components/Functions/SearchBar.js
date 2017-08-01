/**
 * Created by Trent on 7/25/2017.
 */

import React, { Component } from 'react';
import './SearchBar.css';
import Script from 'react-load-script'

export default class SearchBar extends Component {
	constructor(){
		super();
		this.state = {
			placeholder: "Enter a location"
		};
	}
	getPlace(){

		var input = document.getElementById('pac-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
        var place = autocomplete.getPlace();
	}
	handleScriptCreate() {
	  this.setState({ scriptLoaded: false })
	}
	 
	handleScriptError() {
	  this.setState({ scriptError: true })
	}
	 
	handleScriptLoad() {
	  this.setState({ scriptLoaded: true })
	}
    render() {
        return (
        	<div id="pac-container">
		    	<div id="pac-icon"></div>
		        <input id="pac-input" type="text" placeholder="Enter a location"></input>
		    </div>
        );
    }
}
