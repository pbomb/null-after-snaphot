import React from 'react';
import { render } from 'react-testing-library';
import Display from '../display';

test('container is not null after snapshot', () => {
  const { container } = render(<Display text="test text" />);

  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).not.toBeNull();
});
