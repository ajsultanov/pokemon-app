import React  from 'react';
import { Link } from "react-router-dom";
import { leadZeros, capitalize, typeNames, typeColor, baseColor } from "../utils.js";

const Card = (props) => {
    // console.log(props)

    return (
        <Link
            to={"pokemon/" + props.id} 
            className="cardLink"
            state={{ color: typeColor(props), types: typeNames(props) }}
        >
            <div className="Card">
                <div style={{
                    backgroundColor: baseColor(props), 
                    background: 'repeating-linear-gradient(125deg,' + typeColor(props) + ', ' + typeColor(props)  + ' 10px, ' + typeColor(props)  + 'd0 10px, ' + typeColor(props)  + 'd0 20px)',
                    borderRadius: '10px 10px 0px 0px'
                }}>
                    <img
                        src={props.sprites.other["official-artwork"].front_default} 
                        alt="pokemon portrait"
                        className="portrait"
                        style={{maxWidth: 50 + '%'}}
                    />
                </div>
                <div className="cardInfo">
                    <h2>#{leadZeros(props.order)} {capitalize(props.name)}</h2>
                    <h3 className='types'>{typeNames(props) ? typeNames(props).join(' • ') : undefined}</h3>  
                </div>
            </div>
        </Link>
    )
}

export default Card;