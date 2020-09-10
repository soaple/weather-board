// src/components/page/MapViewKakaoMapPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { Sticker } from '@stickyboard/core';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const initialLayout = {
    lg: [{ i: 'MapViewKakaoMap', x: 0, y: 0, w: 12, h: 18 }],
    md: [{ i: 'MapViewKakaoMap', x: 0, y: 0, w: 12, h: 18 }],
    sm: [{ i: 'MapViewKakaoMap', x: 0, y: 0, w: 12, h: 18 }],
    xs: [{ i: 'MapViewKakaoMap', x: 0, y: 0, w: 12, h: 18 }],
    xxs: [{ i: 'MapViewKakaoMap', x: 0, y: 0, w: 12, h: 18 }],
};

const initialBlocks = [{ i: 'MapViewKakaoMap' }];

class MapViewKakaoMapPage extends React.Component {
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

MapViewKakaoMapPage.propTypes = {};

export default MapViewKakaoMapPage;
