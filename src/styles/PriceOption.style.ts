import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding-top: 15px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Span = styled.span<{ isChecked: boolean, isBold?: boolean } >`
  color: ${props => (props.isChecked ? '#000000' : '#999999')};
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
`;

