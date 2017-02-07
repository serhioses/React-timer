import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should stop timer on stopped status', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 10});
        timer.handleStatusChange('stopped');

        expect(timer.state.timerStatus).toBe('stopped');
        expect(timer.state.count).toBe(0);
    });

    it('should start timer on started status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.handleStatusChange('started');

        expect(timer.state.timerStatus).toBe('started');
        expect(timer.state.count).toBe(0);

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(3);
            done();
        }, 3001);
    });

    it('should pause timer on paused status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 10});
        timer.handleStatusChange('paused');

        expect(timer.state.timerStatus).toBe('paused');
        expect(timer.state.count).toBe(10);

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('paused');
            expect(timer.state.count).toBe(10);
            done();
        }, 2001);
    });

    it('should correctly switch between statuses', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.handleStatusChange('started');

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(1);

            timer.handleStatusChange('stopped');

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('stopped');
                expect(timer.state.count).toBe(0);
                done();
            }, 4);
        }, 1001);
    });
});