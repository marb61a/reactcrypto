import highchartsConfig from './HighchartsConfig';
import React from 'react';
import ReactHighcharts from 'react-highcharts';

import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import ChartSelect from './ChartSelect';

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