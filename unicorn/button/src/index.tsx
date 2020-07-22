import React from 'react';
import { meaningOfLife } from '@unicorn/bar';

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props): JSX.Element => (
  <button type='button' onClick={() => console.log(meaningOfLife)}>
    {children}
  </button>
);

export default Button;
