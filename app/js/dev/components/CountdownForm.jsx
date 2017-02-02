import React from 'react';

export default class CountdownForm extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        var strSeconds = this.refs.seconds.value;

        e.preventDefault();
        
        if (strSeconds.search(/^[0-9]+$/) !== -1) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }
    render() {
        return (
            <div>
                <form className="countdown-form" ref="form" onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Enter time in seconds" ref="seconds" />
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
}