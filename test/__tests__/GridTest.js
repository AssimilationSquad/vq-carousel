import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Grid from '../../client/src/components/Grid.jsx';

describe ('something', function() {
  it('do something', function(){
    let grid = mount(<Grid />);
    expect(grid.exists()).toBe(true);
  })
})