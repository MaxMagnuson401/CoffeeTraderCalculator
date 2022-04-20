import React, { useState } from 'react';
import { IPlayer } from '../models/IPlayer';
import { PlayerSelectRow } from './PlayerSelectRow';
import { ResultsTable } from './ResultsTable';

export const CoffeeCalculator: React.FC = () => {
    const [state, setState] = useState({
        players: [
            {
                name: 'blue',
                position: 1,
                houseTotal: 0,
                coffeeAmount: 0,
                isEnabled: true,
            },
            {
                name: 'green',
                position: 2,
                houseTotal: 0,
                coffeeAmount: 0,
                isEnabled: true,
            },
            {
                name: 'yellow',
                position: 3,
                houseTotal: 0,
                coffeeAmount: 0,
                isEnabled: true,
            },
            {
                name: 'red',
                position: 4,
                houseTotal: 0,
                coffeeAmount: 0,
                isEnabled: true,
            },
            {
                name: 'purple',
                position: 5,
                houseTotal: 0,
                coffeeAmount: 0,
                isEnabled: true,
            },
        ],
        producedCoffee: 0,
        showResult: false,
    }) ;

    function setPosition(name: string, event: any) {
        const updatedPlayers = state.players.map((s: IPlayer) => s.name === name ? {...s, position: parseInt(event.target.value)} : {...s});
        setState({...state, players: updatedPlayers});
    };

    function setHouseTotal(name: string, event: any) {
        const updatedPlayers = state.players.map((s: IPlayer) => s.name === name ? {...s, houseTotal: parseInt(event.target.value)} : {...s});
        setState({...state, players: updatedPlayers});
    };

    function setIsEnabled(name: string) {
        const updatedPlayers = state.players.map((s: IPlayer) => s.name === name ? {...s, isEnabled: !s.isEnabled} : {...s});
        setState({...state, players: updatedPlayers});
    };

    function setProducedCoffee(amount: number) {
        setState({...state, producedCoffee: amount})
    }

    const enabledPlayers = state.players.filter((p) => p.isEnabled);

    return <>
        <table>
            <tr>
                <th>Player Color</th>
                <th>Position</th>
                <th>House Count</th>
                <th>Enable Player</th>
            </tr>
            {state.players.map((p: IPlayer) => <PlayerSelectRow
                player={p}
                numberOfPlayers={state.players.filter((p) => p.isEnabled).length}
                updatePosition={(ev) => setPosition(p.name, ev)} 
                updateHouseNumber={(ev) => setHouseTotal(p.name, ev)}
                updateIsEnabled={() => setIsEnabled(p.name)}
            />)}
        </table>
        Coffee Produced:
        <input
            type="number"
            value={state.producedCoffee}
            min={0}
            max={100}
            onChange={(event: any) => setProducedCoffee(event.target.value)}
        />
        <ResultsTable
            players={enabledPlayers}
            coffeeProduced={state.producedCoffee}
        />
    </>;
}