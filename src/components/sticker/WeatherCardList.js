import React from 'react';
import { CardList } from '@stickyboard/card-list';

const cardListData = [
    {
        title: "Today's weather",
        description: 'The weather of Seoul is sunny.',
        author: 'taenykim',
        date: new Date().toISOString(),
        comment: 1,
        heart: 1,
        view: 10,
        share: 3,
        badgeText: 'N',
        badgeColor: '#fb4444',
    },
    {
        title: "Today's weather",
        description: 'The weather of Seoul is sunny.',
        author: 'taenykim',
        date: new Date().toISOString(),
        comment: 1,
        heart: 1,
        view: 10,
        share: 3,
        badgeText: 'N',
        badgeColor: '#fb4444',
    },
    {
        title: "Today's weather",
        description: 'The weather of Seoul is sunny.',
        author: 'taenykim',
        date: new Date().toISOString(),
        comment: 1,
        heart: 1,
        view: 10,
        share: 3,
        badgeText: 'N',
        badgeColor: '#fb4444',
    },
    {
        title: "Today's weather",
        description: 'The weather of Seoul is sunny.',
        author: 'taenykim',
        date: new Date().toISOString(),
        comment: 1,
        heart: 1,
        view: 10,
        share: 3,
        badgeText: 'N',
        badgeColor: '#fb4444',
    },
    {
        title: "Today's weather",
        description: 'The weather of Seoul is sunny.',
        author: 'taenykim',
        date: new Date().toISOString(),
        comment: 1,
        heart: 1,
        view: 10,
        share: 3,
        badgeText: 'N',
        badgeColor: '#fb4444',
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
