import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Grid from '../../client/src/components/Grid.jsx';
import fetch from 'isomorphic-fetch';

describe ('Grid', function() {
  it('has a grid component', function(){
    var grid = mount(<Grid />);
    expect(grid.exists()).toBe(true);
  })
  it('backgrounds that do not overflow', function() {
    var grid = shallow(<Grid />);
    expect(grid.find('.overflow')).toHaveStyle('overflow', 'hidden');
  })
})

