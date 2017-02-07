import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            timerStatus: 'paused'
        };

        this.handleStatusChange = this.handleStatusChange.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus === prevState.timerStatus) {
            return;
        }

        switch (this.state.timerStatus) {
            case 'started': {
                this.startTimer();
                break;
            }
            case 'stopped': {
                this.setState({
                    count: 0
                });
            }
            case 'paused': {
                this.clearTimer();
                break;
            }
        }
    }
    componentWillUnmount() {
        this.clearTimer();
    }
    startTimer() {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;

            this.setState({
                count: newCount
            });
        }, 1000);
    }
    clearTimer() {
        clearInterval(this.timer);
        this.timer = null;
    }
    handleStatusChange(newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    }
    render() {
        var {count, timerStatus} = this.state;

        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
}