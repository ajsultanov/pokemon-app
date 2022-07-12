import React, { useState, useEffect }  from 'react';
import { useParams, useLocation } from "react-router-dom";
import { leadZeros, capitalize } from "../utils.js";
import CapturePopup from './CapturePopup.js';


const DetailPage = () => {
    const location = useLocation()
    const { color, types } = location.state
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [captured, setCaptured] = useState(false);
    const [captureDetails, setCaptureDetails] = useState({})
    const url = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() => {
        fetch(url + id)
            .then(resp => resp.json())
            .then(json => setPokemon(json))
    }, [id])

    const alreadyCaptured = () => {
        console.log(captured)
        // maybe make an iife or put in useeffect
        // check localstorage, set captured to true
        // setCaptureDetails with localstorage items
    }

    const handleClick = () => {

    }

    return (
        <div className="DetailPage">
            <div className="detailHeader" style={{backgroundColor: color}}>
                <img 
                    src={pokemon?.sprites?.other["official-artwork"].front_default}
                    style={{maxWidth: 250 + 'px'}}
                    alt={pokemon?.name + 'portrait'}
                />
                <h1>#{leadZeros(pokemon?.order)} {capitalize(pokemon?.name)}</h1>
            </div>
            <div className="aboutSection">
                <h3>About</h3>
                <p>Height: {pokemon?.height} ft</p>
                <p>Weight: {pokemon?.weight} lbs</p>
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
            {!captured ?
                <div>
                    <CapturePopup />
                </div>
            :
                <div className='aboutSection'>
                    <h3>Capture Info</h3>
                    {
                        localStorage.getItem('key') ?
                            <p>Nickname: {captureDetails?.nickname}</p>
                        :
                            null
                    }
                    <p>Captured Date: {captureDetails?.captureDate}</p>
                    <p>Captured Level: {captureDetails?.captureLevel}</p>
                </div>
            }
        </div>
    )
}

export default DetailPage;