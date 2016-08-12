import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import App from './App';

const setup = () => {
    const props = {

    };

    const wrapper = shallow(<App {...props} />);

    return {
        props,
        wrapper
    };
};


describe('App test', () => {
    it('Enzyme: renders div#1>h2', (done) => {
        const { wrapper } = setup();

        const prop = new Promise((resolve, reject) => {
            const generator = function*() {
                yield 1;
                yield 2;
                yield 3;
            }

            const newArr = Array.from(generator());
            resolve(newArr);
            done();
        });
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('h2').length).toBe(1);
    })
});