import React, { useState, useEffect } from 'react';
import Card from './Card.js';

const CardContainer = () => {
    const [pokemon, setPokemon] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset='
    let offset = 0

    useEffect(() => {
        loadPokemon(offset)
    }, [offset])

    const loadPokemon = (offset) => {
        fetch(url + offset.toString())
            .then(resp => resp.json())
            .then(json => {
                return Promise.all(json.results.map(item => fetch(item.url)))
                    .then(resp => {
                        return Promise.all(resp.map(x => x.json()))
                    })
                    .then(data => {
                        data.forEach(poke => {
                            setPokemon(pokemon => [...pokemon, poke])
                        })
                    })
            })
    }

    window.addEventListener('scroll', () => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;

        if (scrollTop + clientHeight >= (scrollHeight - 100)
            && scrollTop !== 0
            && window.location !== 'http://localhost:3000/captured'
            && offset <= 1140) {
                offset += 20
                loadPokemon(offset)
            }
    }, { passive: true });

    return (
        <div id="CardContainer">
            {
                pokemon.map(mon => {
                    // console.log(pokemon.length)
                    return <Card 
                        key={mon.id} 
                        {...mon}
                    />
                })
            }
        </div>
    )
}

export default CardContainer;