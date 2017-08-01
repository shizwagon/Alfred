/**
 * Created by Trent on 7/25/2017.
 */

import React, { Component } from 'react';
import SearchBar from '../Functions/SearchBar'


export default class Header extends Component {

    render() {
        return (
            <div className="Header">
                <div className="SearchBar">
                    <SearchBar />
                </div>
            </div>
        );
    }
}