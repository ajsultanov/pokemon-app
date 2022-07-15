import React, { useState, useEffect } from 'react';
import Card from './Card.js';

const CardContainer = (props) => {
    const [pokemon, setPokemon] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset='
    let offset = 0

    useEffect(() => {
        loadPokemon(offset)
    }, [])

    const loadPokemon = (offset) => {
        fetch(url + offset.toString())
            .then(resp => resp.json())
            .then(json => {
                console.log(json.results)
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
        let timer = false

        if (scrollTop + clientHeight >= scrollHeight
            && offset + 20 < 1154
            && !timer) {
                offset += 20
                loadPokemon(offset)
                timer = true
                setTimeout(() => {
                    timer = false
                }, 1000)
            }
    })

    return (
        <div className="CardContainer">
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