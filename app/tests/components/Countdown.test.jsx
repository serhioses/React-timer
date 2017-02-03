import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Countdown from 'Countdown';

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);

            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(function () {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should never set negative count', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);

            countdown.handleSetCountdown(1);

            setTimeout(function () {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.count).toNotBe(-2);
                expect(countdown.state.count).toBeGreaterThan(-1);
                done();
            }, 3001);
        });

        it('should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);

            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(function () {
                expect(countdown.state.countdownStatus).toBe('paused');
                expect(countdown.state.count).toBe(3);
                done();
            }, 1001);
        });

        it('should reset countdown on stopped status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);

            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(function () {
                expect(countdown.state.countdownStatus).toBe('stopped');
                expect(countdown.state.count).toBe(0);
                done();
            }, 1001);
        });
    });
});