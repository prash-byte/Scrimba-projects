import React from "react";
import mainlogo from '../images/airbnb_group.png'

export default function Main1() {
    return (
        <div className="main1">
            <img src={mainlogo} alt="group_logo" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}