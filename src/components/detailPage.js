import React, { useState, useEffect }  from 'react';
import { useParams, useLocation } from "react-router-dom";
import { leadZeros, capitalize, baseColor } from "../utils.js";
import CapturePopup from './CapturePopup.js';



const DetailPage = () => {
    const location = useLocation()
    const { color, types } = location.state
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [captureDetails, setCaptureDetails] = useState(null)
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        fetch(url + id)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(`HTTP error: ${resp.status}`)
                }
                return resp.json()
            })
            .then(json => setPokemon(json))
    }, [id])

    const captured = (id) => {
        const stored = JSON.parse(localStorage.getItem(id))
        if (stored !== null && captureDetails === null) {
            setCaptureDetails(stored)
            return true
        } else if (captureDetails !== null) {
            console.log(captureDetails)
            return true
        }
        return false
    }

    return (
        <div id="DetailPage">
            <div 
                id="detailHeader" 
                style={{
                    backgroundColor: baseColor(types[0]), 
                    background: 'repeating-linear-gradient(125deg,' + color + ', ' + color  + ' 10px, ' + color  + 'd0 10px, ' + color  + 'd0 20px)',
            }}>
                <img 
                    src={pokemon?.sprites?.other["official-artwork"].front_default}
                    style={{maxWidth: 250 + 'px'}}
                    alt={pokemon?.name + 'portrait'}
                />
                <h1>#{leadZeros(pokemon?.order)} {capitalize(pokemon?.name)}</h1>
            </div>
            <div className="aboutSection">
                <h3>About</h3>
                <p>Height: {pokemon?.height}ft</p>
                <p>Weight: {pokemon?.weight}lbs</p>
                <p>Type(s): {types ? types.join(' • ') : undefined}</p> 
            </div>
            <div className="aboutSection">
                <h3>Base Stats</h3>
                <p>HP: {pokemon?.stats[0].base_stat}</p>
                <p>ATT: {pokemon?.stats[1].base_stat}</p>
                <p>DEF: {pokemon?.stats[2].base_stat}</p>
                <p>SP ATT: {pokemon?.stats[3].base_stat}</p>
                <p>SP DEF: {pokemon?.stats[4].base_stat}</p>
                <p>SPD: {pokemon?.stats[5].base_stat}</p>
            </div>
            {!captured(id) ?
                <div>
                    <CapturePopup id={id} name={pokemon?.name}/>
                </div>
            :
                <div className='aboutSection'>
                    <h3>Capture Info</h3>
                    {
                        captureDetails?.nickname ?
                            <p>Nickname: {captureDetails.nickname}</p>
                        :
                            console.log("no nickname")
                    }
                    <p>Captured Date: {captureDetails?.captureDate}</p>
                    <p>Captured Level: {captureDetails?.captureLevel}</p>
                </div>
            }
        </div>
    )
}

export default DetailPage;