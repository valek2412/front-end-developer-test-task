import styled, { keyframes } from "styled-components";

const popIn = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.5) ;
}
to {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) ;
}
`;

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;


export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 2em;
  font-size: 16px;
`;

export const Indicator = styled.div`
  border: 1px solid #6CA22C;
  border-radius: 1em;
  width: 24px;
  height: 24px;
  position: absolute;
  top: calc(height/2);
  left: calc(width/2);

  ${Label}:hover & {
    background: #eee;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    border: solid #6CA22C;
    border-radius: 1em;
    background-color: #6CA22C;
    width: 2px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`;
