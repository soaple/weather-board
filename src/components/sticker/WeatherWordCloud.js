import React from 'react';
import { WordCloud } from '@stickyboard/highcharts';

const content = "# Today's weather\n## Sunny\n### Forecast";

function WeatherWordCloud(props) {
    return (
        <WordCloud
            title={'Climate crisis'}
            text={
                'La Niña is here, which could mean a cold and stormier winter than normal across the North, while the southern tier stays drier, with warmer than average temperatures.'
            }
            name={'appearance'}
        />
    );
}

export default WeatherWordCloud;
