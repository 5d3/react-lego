import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import unwrappped from './Game';
const Game = unwrappped.WrappedComponent;

const baseProps = {};

describe('Game Container', () => {
  it('should have an id of game', () => {
    const wrapper = shallow(<Game { ...baseProps } />);
    expect(wrapper.at(0)).to.have.prop('id', 'game');
  });
  //  unit testing goes here
});
