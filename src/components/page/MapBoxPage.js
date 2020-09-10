// src/components/page/MapBoxPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { Sticker } from '@stickyboard/core';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const initialLayout = {
    lg: [{ i: 'WeatherMapBox', x: 0, y: 0, w: 12, h: 18 }],
    md: [{ i: 'WeatherMapBox', x: 0, y: 0, w: 12, h: 18 }],
    sm: [{ i: 'WeatherMapBox', x: 0, y: 0, w: 12, h: 18 }],
    xs: [{ i: 'WeatherMapBox', x: 0, y: 0, w: 12, h: 18 }],
    xxs: [{ i: 'WeatherMapBox', x: 0, y: 0, w: 12, h: 18 }],
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
