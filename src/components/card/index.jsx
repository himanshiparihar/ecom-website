import React from "react";
import "./index.css"

function Card(props){
    return(
        <div className = "card-wrapper">
            <div className="card">
                <img src={props.imgsrc} alt="pic" className="card__img" />
                <div className="card__info">
                    <span className = "card__category">
                        {props.sname}
                    </span>
                    <h6 className="card__title">
                        {props.title}
                    </h6>
                    <a  href={props.href}>
                        <button>Shop now</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;