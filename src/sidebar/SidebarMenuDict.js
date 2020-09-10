// src/sidebar/SidebarMenuDict.js

import React from 'react';

import Timeline from '@material-ui/icons/Timeline';
import WbSunny from '@material-ui/icons/WbSunny';
import Map from '@material-ui/icons/Map';

const SidebarMenuDict = {
    /******************
     * Component Menus
     ******************/
    COMPONENTS: [
        {
            title: 'Sample',
            icon: <Timeline />,
            url: '/sample',
            value: 101,
            need_permission: false,
        },
        {
            title: 'Weather',
            icon: <WbSunny />,
            url: '/weather',
            value: 102,
            need_permission: false,
        },
    ],
    /******************
     * MapView Menus
     ******************/
    MAP_VIEW: [
        {
            title: 'MapBox',
            icon: <Map />,
            url: '/mapview/mapbox',
            value: 201,
            need_permission: false,
        },
        {
            title: 'KakaoMap',
            icon: <Map />,
            url: '/mapview/kakaomap',
            value: 202,
            need_permission: false,
        },
    ],
};

export default SidebarMenuDict;
