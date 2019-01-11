import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Pokédex No.</th>
                <th>Image</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        let types = row.types
        let number = row.national_id
        let pictureUrl = function (number) {
            var nationalNumber
            if (number <= 9) {
                nationalNumber = `00${number}`
                console.log(number)
            } if (number >= 10 && number <=99) {
                nationalNumber = `0${number}`
            } if (number >= 100) {
                nationalNumber = `${number}`
            }
            return `https://www.serebii.net/pokearth/sprites/crystal/${nationalNumber}.png`
        }
        if (types.length > 1) types = types.join(' \\ ');

        return (
            <tr key ={index}>
                <td>{row.name}</td>
                <td>{types}</td>
                <td>{number}</td>
                <td>{<img src= { pictureUrl(number) } />}</td>
            </tr>
        )
    });
    
    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;