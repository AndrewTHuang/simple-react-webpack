import React from 'react';
import { chai, expect } from 'chai';
import { shallow, mount } from 'enzyme';

import LetsDoThis from '../src/components/LetsDoThis';

describe('<LetsDoThis />', () => {
  it('renders as a <div> with class .letsdothis-container', () => {
    const wrapper = shallow(<LetsDoThis />);
    expect(wrapper.find('div.letsdothis-container')).to.have.length(1);
  });
})
