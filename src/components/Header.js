import React  from 'react';
import { Link } from "react-router-dom";
const pokédexLogo =  require('../assets/Pokédex_logo.png')
const pokeball =  require('../assets/pokeball.png')

const Header = (props) => {

    return (
        <div>
            <Link to="/">
                <img src={pokédexLogo}
                    className="pokedexLogo"
                    alt="Pokedex logo"
                />
            </Link>
            <Link to="captured">
                <img src={pokeball}
                    className="pokeballLogo"
                    alt="Pokeball"
                />
                Captured Pokemon
            </Link>
        </div>
    )
}

export default Header;