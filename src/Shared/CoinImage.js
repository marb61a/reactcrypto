import React from 'react';
import styled, {css} from 'styled-components';

const CoinImage = styled.img`
    height: 50px;
`;

export default function ({coin}) {
    return <CoinImage
        alt={coin.CoinSymbol}
        src={`http://cryptocompare.com/${
        coin.ImageUrl
        }`}
    />
}