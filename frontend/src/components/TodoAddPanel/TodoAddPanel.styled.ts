import { styled } from 'styled-components';

export const PanelWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TodoAddPanelWrapper = styled.form`
  display: flex;
  align-items: center;
  width: auto;
  height: 50px;
`;
export const TodoAddInput = styled.input`
  margin: 0 15px;
  height: 30px;
  padding-left: 10px;
  font-size: 16px;
  width: auto;
  border-radius: 15px;
  color: lightgray;
  &:focus,
  &:hover {
    background: #0d536d;
  }
`;
export const TodoAddButton = styled.button`
  text-align: center;
  justify-content: space-between;
  margin-right: 15px;
  font-size: 32px;
  cursor: pointer;
  border-radius: 50%;
  width: 43px;
  height: 43px;
  color: #2b2b2b;
  &:hover {
    color: #0ffff8;
    background: #0989a4;
  }
  &:active {
    color: #0ffff8;
    background: #0989a4;
  }
`;
