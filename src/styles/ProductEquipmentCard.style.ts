import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 24px 24px 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceOptionList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  margin: 34px auto 0;
`;

export const Span = styled.span`
  font-size: 18px;
  line-height: 21px;
`;

export const SelectedItemPrice = styled.span`
  font-size: 24px;
  line-height: 28px;
  padding-right: 8px;
`;

export const Button = styled.button`
  width: 137px;
  height: 48px;
  left: calc(50% - 137px/2 + 50px);
  top: calc(50% - 48px/2 - 153px);
  background: #6CA22C;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  padding-left: 8px;
`;
