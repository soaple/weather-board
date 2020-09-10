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
        {
            title: 'MapBox',
            icon: <Map />,
            url: '/mapbox',
            value: 103,
            need_permission: false,
        },
    ],
};

export default SidebarMenuDict;
