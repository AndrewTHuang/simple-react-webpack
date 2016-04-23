import React from 'react';
import { chai, expect } from 'chai';
import { shallow, mount } from 'enzyme';

import App from '../src/App'
import LetsDoThis from '../src/components/LetsDoThis';

describe('<App />', () => {
  it('renders as a <div> with class .app-container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.app-container')).to.have.length(1);
  });

  it('renders a <LetsDoThis /> component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(LetsDoThis)).to.have.length(1);
  });
})
