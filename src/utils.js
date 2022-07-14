 export const leadZeros = n => {
    if (n) {
        n = n.toString()
        while (n.length < 3) {
            n = '0' + n
        }
        return n
    }
}

export const capitalize = name => {
    if (name) return name[0].toUpperCase() + name.slice(1);
    return undefined
}

export const typeNames = (props) => {
    if (props?.types) return props.types.map(el => capitalize(el.type.name))
    return undefined
}

export const typeColor = props => {
    if (props?.types) {
        switch (props.types[0].type.name) {
            case 'grass':
                return '#9cd87d';
            case 'fire':
                return '#f6a26d';
            case 'bug':
                return '#d2b85b';
            case 'water':
                return '#70b8fe';
            case 'normal':
                return '#c6c6b9';
            case 'poison':
                return '#ba91b2';
            case 'electric':
                return '#f0db75';
            case 'ground':
                return '#d6be8f';
            case 'fairy':
                return '#f2caf2';
            case 'fighting':
                return '#aa776e';
            case 'psychic':
                return '#f6acca';
            case 'ghost':
                return '#ababd9';
            default:
                return '#cccccc';
        }
    }
    return undefined
}

export const baseColor = props => {
    if (props?.types) {
        switch (props.types[0].type.name) {
            case 'grass':
                return '#76cc55';
            case 'fire':
                return '#eb5435';
            case 'bug':
                return '#a9bb22';
            case 'water':
                return '#3399fe';
            case 'normal':
                return '#aaaa9b';
            case 'poison':
                return '#aa5599';
            case 'electric':
                return '#ffcc33';
            case 'ground':
                return '#ddbb54';
            case 'fairy':
                return '#ee99ee';
            case 'fighting':
                return '#ba5544';
            case 'psychic':
                return '#ff5599';
            case 'ghost':
                return '#6666ba';
            default:
                return '#aaaaaa';
        }
    }
    return undefined
}