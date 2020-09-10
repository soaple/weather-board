// src/components/page/MapBoxPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { Sticker } from '@stickyboard/core';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const initialLayout = {
    lg: [{ i: 'WeatherMapBox', x: 0, y: 0, w: 4, h: 5 }],
    md: [{ i: 'WeatherMapBox', x: 0, y: 0, w: 4, h: 5 }],
    sm: [{ i: 'WeatherMapBox', x: 0, y: 0, w: 4, h: 5 }],
    xs: [{ i: 'WeatherMapBox', x: 0, y: 0, w: 6, h: 5 }],
    xxs: [{ i: 'WeatherMapBox', x: 0, y: 0, w: 4, h: 5 }],
};

const initialBlocks = [{ i: 'WeatherMapBox' }];

class MapBoxPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <PageBaseContainer
                initialLayout={initialLayout}
                initialBlocks={initialBlocks}
            />
        );
    }
}

MapBoxPage.propTypes = {};

export default MapBoxPage;
