import React from 'react';
import { shallow } from 'enzyme';
import CategoryList from './CategoryList';
import { categories } from '../data/fixtures';

const props = { categories };
describe('CategoryList', () => {
  const categoryList = shallow(<CategoryList {...props} />);

  it('creates the right number of links', () => {
    expect(categoryList.find('Link').length).toEqual(categories.length);
  });

  it('labels the categories correctly', () => {
    expect(categoryList.find('Link h4').forEach((title, index) => {
      expect(title.text()).toEqual(categories[index].title);
    }));
  });
});
