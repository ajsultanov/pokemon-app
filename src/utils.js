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
    if (props?.types) return props.types.map(el => el.type.name)
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
                return '#cdb047';
            case 'water':
                return '#70b8fe';
            case 'normal':
                return '#c6c6b9';
            default:
                return '#555555';
        }
    }
    return undefined
}