import React from 'react';

import {AppContext} from "../App/AppProvider";
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

export default function ({coinKey, topSection}) {
    return <AppContext.Consumer>
        {
            ({coinList}) => {
                let coin = coinList[coinKey];
                const TileClass = SelectableTile;

                if(topSection) {
                    TileClass = DeletableTile;
                } else if(isInFavorites(coinKey)){
                    TileClass = DisabledTile;
                }
                
            }
        }
    </AppContext.Consumer>
}