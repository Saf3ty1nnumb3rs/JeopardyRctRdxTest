import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders the logo/title div', () => {
    expect(app.find('div').at(3).exists()).toBe(true);
    expect(app.find('div').at(3).hasClass('logo')).toBe(true);
  });

  it('renders a Header component', () => {
    expect(app.find('Header').exists()).toBe(true);
  })
});
