import { styled } from 'styled-components';

export const Button = styled.button`
  margin: 2px;
  font-size: 14px;
  text-align: center;
  background: transparent;
  border-radius: 25%;
  cursor: pointer;
  width: 60px;
  height: 25px;
  color: lightgray;
  background-color: #0d536d;
  &:hover {
    color: #0ffff8;
    background: #0989a4;
  }
  &:after {
    pointer-events: none;
  }
`;
