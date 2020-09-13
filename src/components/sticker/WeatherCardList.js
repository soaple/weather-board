import React from 'react';
import { CardList } from '@stickyboard/card-list';

const cardListData = [
    {
        title: "Today's weather",
        description: 'The weather of Seoul is sunny.',
        author: 'Forecast center',
        date: new Date().toISOString(),
        comment: 2,
        heart: 5,
        view: 120,
        share: 3,
        badgeText: 'Forecast',
        badgeColor: '#0ac900',
    },
    {
        title: "Climate change",
        description: 'Hurricanes, fires, floods and locusts: Science says climate change is here but the RNC refuses to believe',
        author: 'CNN',
        date: new Date().toISOString(),
        comment: 4,
        heart: 10,
        view: 121,
        share: 22,
        badgeText: 'Climate',
        badgeColor: '#e6c100',
    },
    {
        title: "Hurricanes",
        description: 'Hurricanes, fires, floods and locusts: Science says climate change is here but the RNC refuses to believe',
        author: 'CNN',
        date: new Date().toISOString(),
        comment: 2,
        heart: 11,
        view: 12,
        share: 14,
        badgeText: 'Climate',
        badgeColor: '#e6c100',
    },
    {
        title: "Storm is coming",
        description: 'The storm named \'Sally\' is coming.',
        author: 'CNN',
        date: new Date().toISOString(),
        comment: 5,
        heart: 17,
        view: 312,
        share: 23,
        badgeText: 'Alert',
        badgeColor: '#fb4444',
    },
    {
        title: "La Niña has arrived.",
        description: 'La Niña is here, which could mean a cold and stormier winter than normal across the North, while the southern tier stays drier, with warmer than average temperatures.',
        author: 'CNN',
        date: new Date().toISOString(),
        comment: 2,
        heart: 5,
        view: 15,
        share: 5,
        badgeText: 'Climate',
        badgeColor: '#e6c100',
    },
];

function WeatherCardList(props) {
    return (
        <CardList
            data={cardListData}
            title={'Weather News'}
            default={16}
            offset={16}
        />
    );
}

export default WeatherCardList;
