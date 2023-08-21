import { styled } from 'styled-components';

export const LoaderWrapper = styled.div`
  position: absolute;
  left: 45%;
  top: 30%;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 2px sold black;
  border-radius: 50%;
  background: #5b92e5;
  animation: lds-circle 2.6s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  @keyframes lds-circle {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
`;
