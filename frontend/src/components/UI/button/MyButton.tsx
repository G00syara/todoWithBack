import React, { FC } from 'react';
import { Button } from './MyButton.styled';
// import { PropsWithChildren } from 'react'; //Нужно чтобы каждый раз не прописывать children

interface MyButtonProps extends React.ComponentPropsWithRef<'button'> {
  children?: React.ReactChild | React.ReactNode;
}

const MyButton: FC<MyButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default MyButton;
