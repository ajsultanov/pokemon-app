import React  from 'react';
import { capitalize, typeColor, baseColor } from '../utils.js'

const CapturedCard = (props) => {
    console.log(props)

    return (
        <tr scope="" className="CapturedCard">
            <td
                scope="col"
                style={{
                    backgroundColor: baseColor(props), 
                    background: 'repeating-linear-gradient(125deg,' + typeColor(props) + ', ' + typeColor(props)  + ' 5px, ' + typeColor(props)  + 'd0 5px, ' + typeColor(props)  + 'd0 10px)',
                    borderRadius: '10px'
            }}>
                <img
                    src={props?.sprites?.other["official-artwork"].front_default} 
                    alt="pokemon portrait"
                    className="portrait"
                    style={{maxWidth: 90 + '%'}}
                />
            </td>
            <td scope="col">
                name/none
            </td>
            <td scope="col">
                date
            </td>
            <td scope="col">
                level
            </td>
        </tr>
    )
}

export default CapturedCard;