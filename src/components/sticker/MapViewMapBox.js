import React from 'react';
import { MapBox } from '@stickyboard/mapbox';

const sampleInputs = {
    data: {
        mapboxKey: process.env.MAPBOX_TOKEN,
        title: 'Stickyboard-mapbox example',
        description: 'This component is one of stickers in Stickyboard',
        openweathermapKey: process.env.OPEN_WEATHER_MAP_API_KEY,
    },
    map: {
        canvas: {
            style: 0,
            geoLocation: true,
        },
        camera: {
            center: [-73.9499, 40.626],
            zoom: 11,
            pitch: 60,
            bearing: -60,
            centerTheMapOnAClick: true,
        },
    },
    // slideshow: {
    //     maxZoom: 16,
    //     minZoom: 6,
    //     timeoutSec: 3,
    //     location: [
    //         {
    //             id: '2',
    //             title: 'The Bronx',
    //             description:
    //                 "This is where hip-hop was born, where the Yankees became a dynasty and where you can find New York City's leading zoo and botanical garden.",
    //             camera: {
    //                 center: [-73.8709, 40.8255],
    //                 zoom: 13,
    //                 pitch: 50,
    //             },
    //         },
    //         {
    //             id: '3',
    //             title: 'Brooklyn',
    //             description:
    //                 "No matter how hip it looks on TV, NYC's most populous borough is best experienced in person. Read on to find out about live music, Prospect Park, Nets basketball and more.",
    //             camera: {
    //                 center: [-73.9499, 40.626],
    //                 bearing: -8.9,
    //                 zoom: 15,
    //             },
    //         },
    //         {
    //             id: '1',
    //             title: 'Manhattan',
    //             description:
    //                 'Even if you think you know Manhattan—its world-class museums, fine dining and unforgettable views—the borough always has something new and exciting in store.',
    //             camera: {
    //                 center: [-74.007, 40.7437],
    //                 bearing: 25.3,
    //                 zoom: 14,
    //             },
    //         },
    //         {
    //             id: '4',
    //             title: 'Queens',
    //             description:
    //                 "Taste food from around the globe, watch Mets baseball and US Open tennis, see cutting-edge art and more in one of the world's most diverse places.",
    //             camera: {
    //                 center: [-73.8432, 40.6923],
    //                 bearing: 36,
    //                 zoom: 14,
    //             },
    //         },
    //         {
    //             id: '5',
    //             title: 'Staten Island',
    //             description:
    //                 'Take a free ferry ride to an island getaway filled with historic architecture, stunning views, gardens and many family-friendly attractions.',
    //             camera: {
    //                 center: [-74.1991, 40.5441],
    //                 bearing: 28.4,
    //                 zoom: 13,
    //             },
    //         },
    //         {
    //             title: 'Boroughs of new york',
    //             description:
    //                 'New York City is made up of five boroughs: the Bronx, Brooklyn, Manhattan, Queens and Staten Island. Each one has enough attractions—and enough personality—to be a city all its own.',
    //             camera: {
    //                 center: [-74.0315, 40.6989],
    //                 zoom: 9.68,
    //                 bearing: 0,
    //                 pitch: 0,
    //             },
    //         },
    //     ],
    // },
};

function MapViewMapBox(props) {
    return (
        <MapBox
            data={sampleInputs.data}
            map={sampleInputs.map}
            slideshow={sampleInputs.slideshow}
        />
    );
}

export default MapViewMapBox;
