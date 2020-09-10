// src/components/page/MapViewMapBoxPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { Sticker } from '@stickyboard/core';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const initialLayout = {
    lg: [{ i: 'MapViewMapBox', x: 0, y: 0, w: 12, h: 18 }],
    md: [{ i: 'MapViewMapBox', x: 0, y: 0, w: 12, h: 18 }],
    sm: [{ i: 'MapViewMapBox', x: 0, y: 0, w: 12, h: 18 }],
    xs: [{ i: 'MapViewMapBox', x: 0, y: 0, w: 12, h: 18 }],
    xxs: [{ i: 'MapViewMapBox', x: 0, y: 0, w: 12, h: 18 }],
};

const initialBlocks = [{ i: 'MapViewMapBox' }];

class MapViewMapBoxPage extends React.Component {
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

MapViewMapBoxPage.propTypes = {};

export default MapViewMapBoxPage;
