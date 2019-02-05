import React from 'react';
import styled, {css} from 'styled-components';
import {SelectableTile} from "../Shared/Tile";
import {fontSize3, fontSizeBig, greenBoxShadow} from "../Shared/Styles";
import {CoinHeaderGridStyled} from "../Settings/CoinHeaderGrid";
import {AppContext} from "../App/AppProvider";

const JustifyRight = styled.div`
  justify-self: right; 
`;

const JustifyLeft = styled.div`
  justify-self: left; 
`;

const TickerPrice = styled.div`
  ${fontSizeBig};
`;

const ChangePct = styled.div`
  color: green; 
  ${props => props.red && css`
    color: red; 
  `}
`;

const numberFormat = number => {
  return +(number + '').slice(0, 7);
};

const PriceTileStyled = styled(SelectableTile)`

`;

function ChangePercent({data}) {
  <JustifyRight>
    <ChangePct red={data.CHANGEPCT24HOUR < 0}>
      {numberFormat(data.CHANGEPCT24HOUR)}%
    </ChangePct>
  </JustifyRight>
}

function PriceTile({sym, data}) {
  return (
    <PriceTileStyled>
      
    </PriceTileStyled>
  )
}

export default function({price, index}) {
    return(
        <AppContext.Consumer>
            
        </AppContext.Consumer>
    )
}