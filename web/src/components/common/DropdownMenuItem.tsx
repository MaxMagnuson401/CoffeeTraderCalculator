import React from 'react';
import styled from 'styled-components'

const StyledDropdownItem = styled.option`
`;

export interface IDropdownMenuProps {
    id: string;
    text: string;
}

export class DropdownMenuItem extends React.Component<IDropdownMenuProps> {

    public render() {
        return <>
            <StyledDropdownItem id={this.props.id}>
                {this.props.text}
            </StyledDropdownItem>
        </>;
    }
}