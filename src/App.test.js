import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    it('renders properly', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper.debug());
        expect(wrapper.find('Title').props().text).to.equal('title');
    });
});
