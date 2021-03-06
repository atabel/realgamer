import React from 'react';
import {connect} from 'react-redux';
import {getGames, getPlatform} from '../reducers/index';

const GamesList = ({games, platform}) => (
    <div style={{marginLeft: 350}}>
        <p>{platform.name}</p>
        <img src={platform.image} height="200" alt={platform.name} />
        <table style={{width: '100%', border: '1px solid #666'}}>
            <thead>
                <tr style={{fontWeight: 'bold'}}>
                    <td style={{width: '40%'}}>title</td>
                    <td style={{width: '25%'}}>developer</td>
                    <td style={{width: '25%'}}>publisher</td>
                    <td style={{width: '10%'}}>year</td>
                </tr>
            </thead>
            <tbody>
                {games.map(game => (
                    <tr key={game.id}>
                        <td>{game.title}</td>
                        <td>{game.developer}</td>
                        <td>{game.publisher}</td>
                        <td>{game.year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default connect((state, props) => ({
    games: getGames(state, props.params.id),
    platform: getPlatform(state, props.params.id),
}))(GamesList);
