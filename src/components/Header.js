import React  from 'react';
import { Link } from "react-router-dom";
const pokédexLogo =  require('../assets/Pokédex_logo.png')
const pokeball =  require('../assets/pokeball.png')

const Header = () => {

    return (
        <div id="Header">
            <Link to="/">
                <img src={pokédexLogo}
                    id="pokedexLogo"
                    alt="Pokedex logo"
                />
            </Link>
            <Link to="captured" id="capturedLink">
                <img src={pokeball}
                    id="pokeballLogo"
                    alt="Pokeball"
                />
                Captured Pokémon
            </Link>
        </div>
    )
}

export default Header;