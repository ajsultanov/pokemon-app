import React, { useState, useEffect }  from 'react';
import { useParams } from "react-router-dom";

const DetailPage = (props) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    let { id } = useParams();
    console.log(id)
    const [pokemon, setPokemon] = useState(null);
    const [captured, setCaptured] = useState(false);

    useEffect(() => {
        fetch(url + id)
            .then(resp => resp.json())
            .then(json => setPokemon(json))
    }, [id])

    const alreadyCaptured = () => {
        // maybe make an iife
        // check localstorage, set captured to true
    }

    const capitalize = name => {
        if (name) return name[0].toUpperCase() + name.slice(1);
        return undefined
    }
    const typeNames = () => {
        if (pokemon?.types) return pokemon.types.map(el => el.type.name)
        return undefined
    }

    return (
        <div className="Details">
            <img 
                src={pokemon?.sprites?.other["official-artwork"].front_default}
                style={{maxWidth: 250 + 'px'}}
                alt={pokemon?.name + 'portrait'}
            />
            <h1>{capitalize(pokemon?.name)}</h1>
            <div>
                <h3>About</h3>
                <p>Height: {pokemon?.height} ft</p>
                <p>Weight: {pokemon?.weight} lbs</p>
                <p>Type(s): {typeNames() ? typeNames().join(', ') : undefined}</p> 
            </div>
            <div>
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
                    <button className="CaptureButton">
                        Capture! 
                        {
                            //(open modal)
                        }
                    </button>
                </div>
            :
                <div>
                    <h3>Capture Info</h3>
                    <p>Nickname</p>
                    <p>Captured Date</p>
                    <p>Captured Level</p>
                </div>
            // these need to be from localstorage
            }
        </div>
    )
}

export default DetailPage;