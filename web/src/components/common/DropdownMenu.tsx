import React from 'react';
import styled from 'styled-components'

const StyledDropdown = styled.select`
`;

export interface IDropdownMenuProps {
    id: string;
    isDefault?: boolean;
    onSelect: (e: any) => void;
}

export class DropdownMenu extends React.Component<IDropdownMenuProps> {

    public render() {
        return <>
            <StyledDropdown id={this.props.id} onChange={(e: any) => this.props.onSelect(e.target.value)}>
                {this.props.isDefault && <option value="" selected disabled hidden>Choose One</option>}
                {this.props.children}
            </StyledDropdown>
        </>;
    }
}