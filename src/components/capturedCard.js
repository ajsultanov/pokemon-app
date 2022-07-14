import React  from 'react';
import { leadZeros, capitalize, typeNames, typeColor, baseColor } from "../utils.js";

const CapturedCard = (props) => {
    console.log(props)

    return (
        <tr className="CapturedCard">
            <td className='capturedPortraitCell'>
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
            </td>
            <td>
                {props.nickname}
            </td>
            <td>
                {props.captureDate}
            </td>
            <td className='capturedLevelCell'>
                {props.captureLevel}
            </td>
        </tr>
    )
}

export default CapturedCard;