import React, { ScrollView } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import PeopleListScene from './PeopleListScene.jsx';

describe('PeopleListScene.jsx', () => {

  it('Should render', () => {
    const wrapper = shallow(<PeopleListScene />);
    expect(wrapper.find(ScrollView)).to.have.length(1);
  });
});
