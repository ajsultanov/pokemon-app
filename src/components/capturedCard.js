import React  from 'react';
import { Link } from "react-router-dom";
import { leadZeros, capitalize, typeNames, typeColor, baseColor } from "../utils.js";

const CapturedCard = (props) => {

    return (
        <Link
            to={"/pokemon/" + props.id} 
            className="cardLink"
            state={{ color: typeColor(props), types: typeNames(props) }}
        >
            <div className="CapturedCard">
                <div className='capturedPortraitCell'>
                    <div
                        className='capturedImgContainer'
                        style={{
                            backgroundColor: baseColor(props), 
                            background: 'repeating-linear-gradient(125deg,' + typeColor(props) + ', ' + typeColor(props)  + ' 5px, ' + typeColor(props)  + 'd0 5px, ' + typeColor(props)  + 'd0 10px)',
                            borderRadius: '10px'
                    }}>
                        <img
                            src={props?.sprites?.other["official-artwork"].front_default} 
                            alt={props.name + "portrait"}
                            style={{maxWidth: 90 + '%'}}
                        />
                    </div>
                    <div className='capturedPortraitInfo'>
                        <h3>{'#' + leadZeros(props.order)} {capitalize(props.name)}</h3>
                        <div className='types'>{typeNames(props) ? typeNames(props).join(' • ') : undefined}</div>
                    </div>
                </div>
                <div>
                    {props.nickname?
                        props.nickname
                    :
                        <i style={{color: '#666666'}}>none</i>
                    }
                </div>
                <div>
                    {props.captureDate}
                </div>
                <div className='capturedLevelCell'>
                    {props.captureLevel}
                </div>
            </div>
        </Link>
    )
}

export default CapturedCard;