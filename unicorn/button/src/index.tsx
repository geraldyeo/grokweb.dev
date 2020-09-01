import React from 'react';
import styled from '@emotion/styled';
import { meaningOfLife } from '@unicorn/bar';

interface Props {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  background-color: white;
`;

const Button = ({ children }: Props): JSX.Element => (
  // eslint-disable-next-line no-console
  <StyledButton type="button" onClick={() => console.log(meaningOfLife)}>
    {children}
  </StyledButton>
);

export default Button;
