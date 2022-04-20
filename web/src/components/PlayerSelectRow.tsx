import React from "react";
import { IPlayer } from "../models/IPlayer";

export interface IPlayerSelectProps {
    player: IPlayer,
    numberOfPlayers: number,
    updatePosition: (event: any) => void;
    updateHouseNumber: (event: any) => void;
    updateIsEnabled: () => void;
}

export function PlayerSelectRow(props: IPlayerSelectProps) {

    const positionSelectOptions = CreateSelectOptions(props.numberOfPlayers);

    return <>
        <tr>
            <td>
                {props.player.name}
            </td>
            <td>
                <select disabled={!props.player.isEnabled} onChange={props.updatePosition} value={props.player.position}>
                    {positionSelectOptions.map((o) => {
                        return <option value={o.id}>{o.name}</option>
                    })}
                </select>
            </td>
            <td>
                <input
                    type="number"
                    value={props.player.houseTotal}
                    min={0}
                    max={3}
                    onChange={props.updateHouseNumber}
                    disabled={!props.player.isEnabled}
                    size={10}
                />
            </td>
            <td>
                <button onClick={() => props.updateIsEnabled()}>
                    {props.player.isEnabled ? 'disable' : 'enable'}
                </button>
            </td>
        </tr>
    </>;
};

function CreateSelectOptions(optionsLength: number) {
    let options = [];

    for(let i = 0; i < optionsLength; i++) {
        options.push({
            name: '' + (i + 1),
            id: i + 1,
        });
    }

    return options;
}
