import * as React from 'react'

import { IPriceOption } from "../data/Interfaces";

import RadioButton from "./RadioButton";

import { Wrapper, LabelWrapper, Span } from "../styles/PriceOption.style";

interface IPriceOptionProps {
  priceItem: IPriceOption;
  isChecked: boolean;
  onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}


const PriceOption: React.FC<IPriceOptionProps> = ( { priceItem, isChecked, onChange } ) => {
  return (
    <Wrapper>
      <RadioButton
        id={`${priceItem.id}`}
        checked={isChecked}
        onChange={onChange} />
      <LabelWrapper>
        <Span isChecked={isChecked}>
          {priceItem.type}
        </Span>
        <Span isChecked={isChecked} isBold={isChecked}>
          {priceItem.price} грн
        </Span>
      </LabelWrapper>
    </Wrapper>
  )
};

export default PriceOption;
