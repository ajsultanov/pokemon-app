import React, { useState, useEffect }  from 'react';
import CapturedCard from './CapturedCard.js'

const CapturedCardContainer = (props) => {
    // console.log(props)
    const [capturedPokemon, setCapturedPokemon] = useState([])
    const [pokemon, setPokemon] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() => {
        capturedPokemon.map(poke => {
            fetch(url + poke.id.toString())
                .then(resp => resp.json())
                .then(poke => {
                    setPokemon(pokemon => [...pokemon, poke])
                })
        })
        return () => {}
    }, [])

    const anyCaptured = () => {
        if (localStorage.length !== 0 && capturedPokemon.length === 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let value = JSON.parse(localStorage.getItem(localStorage.key(i)))
                value.id = localStorage.key(i)
                setCapturedPokemon(pokemon => [...pokemon, value])
            }
            return true
        } else if (capturedPokemon.length !== 0) {
            return true
        }
        return false
    }

    return (
        <div className='CapturedCardContainer'>
            {anyCaptured() ? 
                <div>
                    <table>
                        <thead className='capturedListHeader'>
                            <tr>
                                <th scope="col" >POKEMON</th>
                                <th scope="col">NICKNAME</th>
                                <th scope="col">CAPTURED AT</th>
                                <th scope="col" className='capturedLevelCell'>CAPTURED LEVEL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {capturedPokemon.map(mon => {
                                console.log(mon, pokemon[mon.id])
                                return <CapturedCard 
                                    key={mon.id} 
                                    nickname={mon.nickname}
                                    captureDate={mon.captureDate}
                                    captureLevel={mon.captureLevel}
                                    {...pokemon[mon.id]}
                                />
                            })}
                        </tbody>
                    </table>
                </div>
            :
                <h1>No Pokemon captured yet!</h1>
            }
        </div>
    )
}

export default CapturedCardContainer;