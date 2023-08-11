import { styled } from 'styled-components';

// .color1 {color: #112e41;}
// .color2 {color: #0d536d;}
// .color3 {color: #0989a4;}
// .color4 {color: #05cee1;}
// .color5 {color: #0ffff8;}

export const TodoItemWrapper = styled.div`
  display: flex;
  position: static;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 100px 10px / 120px;
  padding: 10px;
  margin: 20px;
  background: #5d8aa8;
`;
export const TodoItemBetweenWrapperContainer = styled.div``;

export const TodoItemContainer = styled.div``;
export const TodoItemFormEdit = styled.form``;
export const TodoItemInputEdit = styled.input`
  margin-bottom: 5px;
  margin-right: 10px;
  height: 20px;
  font-size: 16px;
  border-radius: 15px;
  color: lightgray;
  &:focus,
  &:hover {
    background: #0d536d;
  }
`;

export const TodoItemAddCategoryToTodoButton = styled.button`
  z-index: 10;
  margin: 2px;
  margin-right: 10px;
  font-size: 14px;
  line-height: 1.8em;
  padding: 1;
  text-align: center;
  border: 1.5px solid black;
  border-radius: 50%;
  cursor: pointer;
  color: #0ffff8;
  width: 32px;
  height: 32px;
  background-color: #0d536d;
  &:hover {
    background: lightgray;
  }
`;

export const TodoItemNameCheckbox = styled.div`
  display: flex;
  padding: 5px;
  font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;
  font-weight: 600;
`;
export const TodoItemId = styled.div`
  margin-right: 5px;
`;
export const TodoItemCategoryWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: flex-start;
`;
export const TodoItemCurrentCategory = styled.div`
  display: flex;
  margin-right: 5px;
  border: 1.5px dashed #a2a49c;
  border-top-right-radius: 800px;
  border-bottom-right-radius: 800px;
  line-height: 2em;
  background: #112e41;
  padding: 5px;
  color: #e2e2e2;
  font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;
  font-size: 12px;
  font-style: cursive;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #0ffff8;
    background: #0989a4;
  }
`;
export const TodoItemButtons = styled.div`
  display: grid;
  text-align: center;
  justify-content: end;
  float: right;
`;

export const TodoItemInput = styled.input``;

export const TodoItemCategoriesList = styled.span`
  position: relative;
  left: 50%;
  margin-bottom: 0;
  margin-top: 0;
  padding: 0;
  border: 1px solid black;
  max-height: 100px;
  overflow-y: auto;
  cursor: pointer;
  background: lightgray;
  width: 100px;
  &:hover {
    color: #0ffff8;
    background: #0989a4;
  }
`;
export const TodoItemCategoriesListWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  z-index: 2;
  position: absolute;
`;
