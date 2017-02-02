import React from 'react';

class Controls extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {countdownStatus} = this.props;

        function renderStopStartButton () {
            if (countdownStatus === 'started') {
                return <button className="button secondary">Pause</button>;
            } else if (countdownStatus === 'paused') {
                return <button className="button primary">Start</button>;
            }
        }

        return (
            <div className="controls">
                {renderStopStartButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        );
    }
}
Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired
};

export default Controls;