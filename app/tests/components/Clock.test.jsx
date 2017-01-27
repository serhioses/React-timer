import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>),
                el = $(ReactDOM.findDOMNode(clock)),
                actualText = el.find('.clock-text').text();

            expect(actualText).toBe('01:02');
        });
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>),
                s = 615,
                expected = '10:15',
                actual = clock.formatSeconds(s);

            expect(actual).toBe(expected);
        });

        it('should format seconds when min/sec are less than 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>),
                s = 61,
                expected = '01:01',
                actual = clock.formatSeconds(s);

            expect(actual).toBe(expected);
        });
    });
});