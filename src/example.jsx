/**
 * ReactCompass - a carefully crafted Compass component for React.
 * https://github.com/virtyaluk/react-compass
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

import React from 'react';
import { render } from 'react-dom';
import ReactCompass from './ReactCompass';

class ReactApp extends React.Component {
    state = {
        rangeVal: 0
    };

    rangeOnChange(e) {
        this.setState({ rangeVal: parseInt(e.target.value, 10) });
    }

    render = () => (
        <div>
            <ReactCompass direction={this.state.rangeVal}/>
            <input type="range" max="360" min="0"
                   onChange={this.rangeOnChange.bind(this)} onInput={this.rangeOnChange.bind(this)}/>
        </div>
    );
}

render(<ReactApp />, document.getElementById('app'));