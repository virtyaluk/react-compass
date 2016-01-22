/**
 * ReactCompass - a carefully crafted Compass component for React.
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 *
 * @flow
 */

import React from 'react';

export default class ReactCompass extends React.Component {
    static defaultProps = {
        direction: 0,
        directionNames: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    };

    static propTypes = {
        direction: React.PropTypes.number.isRequired,
        directionNames: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    };

    get direction(): number {
        let d = this.props.direction;

        while (d < 0) {
            d += 360;
        }

        while (d > 360) {
            d -= 360;
        }

        return d;
    }

    get directionName(): string {
        let sections = this.props.directionNames.length,
            sect = 360 / sections,
            x = Math.floor((this.direction + sect / 2) / sect);

        x = x >= sections ? 0 : x;

        return this.props.directionNames[x];
    }

    render = () => (
        <div className="compass">
            <div className="compass__windrose" style={ { transform: `rotate(-${this.direction}deg)` } }>
                {[...Array(10)].map((k, i) => <div className="compass__mark" key={i + 1}></div>)}
                <div className="compass__mark--direction-h"></div>
                <div className="compass__mark--direction-v"></div>
            </div>

            <div className="compass__arrow-container">
                <div className="compass__arrow"></div>
                <div className="compass__labels">
                    <span>{this.directionName}</span>
                    <span>{this.direction}<sup>o</sup></span>
                </div>
            </div>
        </div>
    );
}