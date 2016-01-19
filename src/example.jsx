/**
 * ReactCompass - a carefully crafted Compass component for React.
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactCompass from './ReactCompass';

class ReactApp extends React.Component {
    state = {
        rangeVal: 0
    };

    render() {
        var rangeOnChange = (e) => this.setState({rangeVal: e.target.value });

        return (
            <div>
                <ReactCompass direction={this.state.rangeVal} />
                <input type="range" onChange={rangeOnChange.bind(this)} onInput={rangeOnChange.bind(this)}
                       style={ {marginTop: '15px', width: '400px' } } max="180" min="-180" />
            </div>
        );
    }
}

ReactDOM.render(<ReactApp />, document.getElementById('app'));