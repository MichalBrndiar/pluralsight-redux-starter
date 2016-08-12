import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import AboutPage from './AboutPage';

const setup = () => {
    const props = {
        location: {
            pathname: {}
        },
        params: {
            name: 'testing...'
        }

    }
    const wrapper = mount(<AboutPage {...props} />);

    return { wrapper };
};


describe('About Page', () => {
    it('displays name correctly', () => {
        const { wrapper } = setup();

        expect(wrapper.find('#name').text()).toBe('testing...');
        expect(wrapper.find('#name').prop('id')).toBe('name');
    // expect(wrapper())

    });
});