import React  from 'react';


const Card = (props) => {
    // console.log(props)

    return (
        <div className="Card">
            <a href={"pokemon/" + props.id}>
            <h1>#{props.order} - {props.name[0].toUpperCase() + props.name.slice(1)}</h1>
            <h3>Type(s): {props.types.map(item => {
                return <span style={{margin: 5 + 'px'}}>{item.type.name}</span>
            })}</h3>  
            <img
                src={props.sprites.other["official-artwork"].front_default} 
                alt="pokemon portrait"
                className="portrait"
                style={{maxWidth: 100 + 'px'}}
            />
            </a>
        </div>
    )
}

export default Card;