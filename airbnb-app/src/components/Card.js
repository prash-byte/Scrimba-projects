import React from "react";
import star from '../images/star.png';

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
       <div className="cards">
        {badgeText && <div className="card-badge">{badgeText}</div>}
         <div className="carddetails">
            <img src={props.item.coverImg} alt="image1" />
            <div className="ratings">
               <img src={star} alt="star" />
               <span>{props.item.stats.rating}</span> 
               <span className="gray">({props.item.stats.reviewCount}) • </span>
               <span className="gray">{props.item.location}</span> 
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
          </div>
       </div>
    )
}