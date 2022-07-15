import React, { useState, useEffect }  from 'react';
import CapturedCard from './CapturedCard.js'

const CapturedCardContainer = () => {
    const [capturedPokemon, setCapturedPokemon] = useState([])
    const [pokemon, setPokemon] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() => {
        capturedPokemon.map(poke => {
            fetch(url + poke.id.toString())
                .then(resp => {
                    if (!resp.ok) {
                        throw new Error(`HTTP error: ${resp.status}`)
                    }
                    return resp.json()
                })
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
                    <div>
                        <div className='capturedListHeader'>
                            <div className='capturedInfoCell'>
                                <span>POKEMON</span>
                            </div>
                            <div>
                                <span>NICKNAME</span>
                            </div>
                            <div>
                                <span>CAPTURED AT</span>
                            </div>
                            <div>
                                <span className='capturedLevelCell'>CAPTURED LEVEL</span>
                            </div>
                        </div>
                        <div>
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
                        </div>
                    </div>
                </div>
            :
                <h1>No Pokemon captured yet!</h1>
            }
        </div>
    )
}

export default CapturedCardContainer;