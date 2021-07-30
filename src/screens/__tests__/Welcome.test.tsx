import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import Welcome from '../Welcome';

describe('Welcome screen', () => {
  test('it renders the Welcome component', () => {
    const { getByText } = render(
      <Router>
        <Welcome />
      </Router>
    );
    expect(getByText(/welcome to the trivia challenge/i)).toBeInTheDocument();
    expect(getByText(/question 1/i)).toBeInTheDocument();
  });
});
