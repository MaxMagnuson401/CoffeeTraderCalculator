import React from "react";
import { IPlayer } from "../models/IPlayer";

export interface IScore {
    playerName: string,
    score: number,
}

export interface IPlayerSelectProps {
    players: IPlayer[],
    coffeeProduced: number,
}

export function ResultsTable(props: IPlayerSelectProps) {

    const scores = computeScores(props.players, props.coffeeProduced);

    return <>
        <table>
            <tr>
                <th>Player</th>
                <th>Coffee</th>
            </tr>
            {scores.map((s: IScore) => {
                return (<tr>
                    <td>{s.playerName}</td>
                    <td>{s.score}</td>
                </tr>);
            })}
        </table>
    </>;
};

function computeScores(players: IPlayer[], coffeeProduced: number) {
    let scores: IScore[] = [];
    const houseTotal = players.map((p) => p.houseTotal).reduce((previousValue, currentValue) => currentValue + previousValue);
    const playerTotal = players.length;
    const coffeeToSplit = coffeeProduced - houseTotal - 1;
    players.forEach((element: IPlayer) => {
        let cut = Math.floor(coffeeToSplit / playerTotal);
        if (cut < 0) {
            cut = 0;
        } else {
            if (coffeeToSplit%playerTotal >= element.position) {
                cut++;
            } 
            if (cut > 5) {
                cut = 5;
            }
            if (element.position === 1) {
                cut++;
            }
        }
        cut = cut + element.houseTotal;
        scores.push({playerName: element.name, score: cut});
    })
    return scores;
}