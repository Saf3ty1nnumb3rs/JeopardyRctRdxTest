import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  const header = mount(<BrowserRouter><Header /></BrowserRouter>);

  it('renders one container', () => {
    expect(header.find('div.links').length).toBe(1);
  });

  it('renders a link with h3 and `Home`', () => {
    expect(header.find('Link h3').at(0).text()).toEqual('Home');
  });

  it('provides link to root', () => {
    expect(header.find('Link').first().props().to).toBe('/');
  });

  it('renders a second link with h3 and `Categories`', () => {
    expect(header.find('Link h3').at(1).text()).toEqual('Categories');
  });

  it('provides a link to `categories`', () => {
    expect(header.find('Link').at(1).props().to).toBe('/categories');
  });
})