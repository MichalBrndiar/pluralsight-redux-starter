import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from './App';

const setup = () => {
    const props = {

    };

    const renderer = TestUtils.createRenderer();
    renderer.render(<App {...props} />);
    const output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
};


describe('App test', () => {
    it('ReactTestUtils: renders div#1>h2', () => {
        const { output } = setup() ;
        expect(output.type).toBe('div');

        const [h2] = output.props.children;
        expect(h2.type).toBe('h2');
    })
});