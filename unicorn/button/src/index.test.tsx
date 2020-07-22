import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

test('displays button', () => {
  const { getByText } = render(<Button>Button</Button>);
  expect(getByText('Button')).toHaveTextContent('Button');
});
