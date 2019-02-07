import highchartsConfig from './HighchartsConfig';
import React from 'react';
import ReactHighcharts from 'react-highcharts';

import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
    return (
        <AppContext.Consumer>
            {
                ({changeChartSelect}) => 
                <Tile>
                    <ChartSelect>
                        
                    </ChartSelect>
                </Tile>
            }
        </AppContext.Consumer>
    );
}