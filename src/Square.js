import React from 'react';

class Square extends React.Component {
    //React components can have state by setting this.state in their constructors.
    constructor(props) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
        super(props)
        this.state = {
            value: null,
        }
    }
    render() {
        return (
            <button
                className="square"
                onClick={() => { this.setState({ value: 'X' }) }}>
                {this.state.value}
            </button>
        );
    }
}

export default Square;