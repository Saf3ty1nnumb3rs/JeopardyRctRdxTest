import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Clue from './Clue';
import { clue } from '../data/fixtures';
import { act } from 'react-dom/test-utils';

const props = { clue };

describe('Clue', () => {
  let clueWrapper = mount(<Clue {...props} />);

  it('renders the clue value', () => {
    expect(clueWrapper.find('h4 div').text()).toEqual(clue.value.toString());
  });

  it('renders the clue question', () => {
    expect(clueWrapper.find('h5 div').first().text()).toEqual('question');
  });

  it('renders the clue answer', () => {
    expect(clueWrapper.find('h5 div').at(1).text()).toEqual('answer');
  });

  it('sets the question and answer to both have the call `text-hidden card`', () => {
    expect(clueWrapper.find('h5').at(0).hasClass('text-hidden card')).toBe(true);
    expect(clueWrapper.find('h5').at(1).hasClass('text-hidden card')).toBe(true);
  });

  describe('when rendering a clue with no value', () => {
    beforeEach(() => {
      props.clue.value = undefined;

      clueWrapper = shallow(<Clue {...props} />);
    });

    it('displays the value as `unknown`', () => {
      expect(clueWrapper.find('h4 div').text()).toEqual('unknown');
    })
  })
  describe('tests hooks functionality', () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });

    it('can render and update the clue', () => {
      act(() => {
        ReactDOM.render(<Clue {...props} />, container);
      });
      const val = container.querySelector('h4.val');
      const ques = container.querySelector('h5.question');
      const ans = container.querySelector('h5.answer');

      act(() => {
        val.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(ques.classList.contains('text-revealed')).toBe(true);
      expect(val.classList.contains('text-hidden')).toBe(true);
      expect(ans.classList.contains('text-hidden')).toBe(true);

      act(() => {
        ques.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(ans.classList.contains('text-revealed')).toBe(true);
      expect(ques.classList.contains('text-hidden')).toBe(true);
      expect(val.classList.contains('text-hidden')).toBe(true);

      act(() => {
        ans.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(val.classList.contains('text-revealed')).toBe(true);
      expect(ans.classList.contains('text-hidden')).toBe(true);
      expect(ques.classList.contains('text-hidden')).toBe(true);
    });
  });

})