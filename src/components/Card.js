import React from "react";

export default function Card(props) {

    return (
        
        <div className={'card'+ props.id + " card"}>
            <img src={props.img} alt="svg-icon"></img>
                <h1>{props.type}</h1>
                <p>{props.description}</p>
                <button>Learn More</button>
        </div>

    )
}