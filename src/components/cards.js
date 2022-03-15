import React from "react";
import Star from "../images/R.png"


export default function Cards(props){
    let badgeText;
    if(props.openSpots===0){
        badgeText= "SOLD OUT"
    }else if(props.location==="Online"){
        badgeText= "ONLINE"
    }
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-image">
                    <img src={props.coverImg}></img>
                    {badgeText && <div className="card-tag"><p>{badgeText}</p></div>}
                </div>
            </div>
            <div className="card-subtext">
                <div className="card-rating">
                    <img src={Star}></img>
                    <p>{props.stats.rating}</p>
                    <p>({props.stats.reviewCount})</p>
                    <p>{props.country}</p>
                </div>
                <div className="card-name">
                    <p>{props.title}</p>
                </div>
                <div className="card-price">
                    <p><strong>From ${props.price} /</strong> person</p>
                </div>
            </div>
        </div>
    )
}