import React, { Component } from 'react';
import Day from "../DayComponents/Day";

class Week extends Component {
    render() {
        return (
        <div className="week-hld">
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
        </div>
        );
    }
}


export default Week;
