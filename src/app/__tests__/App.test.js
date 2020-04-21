import React from 'react';
import { render } from '@testing-library/react';
import App from '../index';

test('app content', () => {
  const { getByText } = render(<App />);

  //header
  const header = getByText(/Weather Information App/i);
  expect(header).toBeInTheDocument();

  // footer
  const footer = getByText(/Weather App/i);
  expect(footer).toBeInTheDocument();


  // menu
  const menu = getByText(/Menu/i);
  expect(menu).toBeInTheDocument();

});
