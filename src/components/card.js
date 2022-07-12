import React  from 'react';
import { Link } from "react-router-dom";
import { leadZeros, typeNames, typeColor } from "../utils.js";

const Card = (props) => {
    // console.log(props)

    return (
        <Link
            to={"pokemon/" + props.id} 
            className="cardLink"
            state={{ color: typeColor(props), types: typeNames(props) }}
        >
            <div className="Card">
                <div style={{backgroundColor: typeColor(props), borderRadius: '10px 10px 0px 0px'}}>
                    <img
                        src={props.sprites.other["official-artwork"].front_default} 
                        alt="pokemon portrait"
                        className="portrait"
                        style={{maxWidth: 50 + '%'}}
                    />
                </div>
                <div className="cardInfo">
                    <h2>#{leadZeros(props.order)} {props.name[0].toUpperCase() + props.name.slice(1)}</h2>
                    <h3 className='types'>{typeNames(props) ? typeNames(props).join(' • ') : undefined}</h3>  
                </div>
            </div>
        </Link>
    )
}

export default Card;