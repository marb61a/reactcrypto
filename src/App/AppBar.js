import React from 'react';
import styled from 'styled-components';

const Logo = styled.div `
    font-size: 1.5em;
`;

const Bar = styled.div `
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div `
    cursor: pointer;
    ${props => props.active && css `
    
    `}
`; 

function ControlButton({name}) {

}
i
export default function () {
    return (
        <Bar>
            <Logo>ReactCrypto</Logo>
            <div>Dashboard</div>
            <div>Settings</div>
        </Bar>
    )
}