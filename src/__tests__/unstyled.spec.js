import React from 'react';
import { render } from 'react-testing-library';
import Unstyled from '../unstyled';

test('container is not null after snapshot', () => {
  const { container } = render(<Unstyled text="test text" />);

  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).not.toBeNull();
});
