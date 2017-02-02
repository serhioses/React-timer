import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

export default class Countdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };

        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started': {
                    this.startTimer();
                    break;
                }
                case 'stopped': {
                    this.setState({count: 0});
                }
                case 'paused': {
                    clearInterval(this.timer);
                    this.timer = null;
                    break;
                }
            }
        }
    }
    startTimer() {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;

            this.setState({
                count: (newCount >= 0) ? newCount : 0
            });
        }, 1000);
    }
    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    }
    handleStatusChange(newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    }
    render() {
        var {count, countdownStatus} = this.state,
            self = this;

        function renderControlArea () {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={self.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={self.handleSetCountdown}/>;
            }
        }

        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
}