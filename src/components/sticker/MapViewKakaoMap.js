import React from 'react';
import { KakaoMap } from '@stickyboard/kakao-map';

const dataListWithDetails = [
    {
        latitude: 37.2479104,
        longitude: 127.0781385,
        details: {
            NAME: 'Subway',
            TYPE: 'fastfood',
            MENU: 'sandwich',
        },
    },
    {
        latitude: 37.2479733442,
        longitude: 127.0776020771,
        details: {
            NAME: 'McDonald',
            TYPE: 'fastfood',
            MENU: 'hamburger',
        },
    },
    {
        latitude: 37.247911325,
        longitude: 127.0766958899,
        details: {
            NAME: 'Starbucks',
            TYPE: 'cafe',
            MENU: 'beverage, coffee',
        },
    },
];

function MapViewKakaoMap(props) {
    return (
        <KakaoMap
            level={2}
            longitude={127.0776020771}
            latitude={37.2479733442}
            dataList={dataListWithDetails}
            appKey={KAKAO_APP_KEY}
        />
    );
}

export default MapViewKakaoMap;
