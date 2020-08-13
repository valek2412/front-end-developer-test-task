import * as React from 'react'

import { Wrapper,
  Header,
  PriceOptionList,
  Footer,
  Span,
  SelectedItemPrice,
  Button } from "../styles/ProductEquipmentCard.style";

import { IPriceOption } from "../data/Interfaces";
import PriceOption from "./PriceOption";

interface ICardProps {
  prices: IPriceOption[];
  onSubmit: (selectedItemPrice: IPriceOption) => void;
}


const ProductEquipmentCard: React.FC<ICardProps> = ( { prices, onSubmit} ) => {
  const [selectedItem, setSelectedItem] = React.useState<IPriceOption>(prices[0]);

  const handleClick = () => {
    onSubmit(selectedItem);
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const selectedIndex: number = prices.findIndex(i => i.id === parseInt(target.id, 10));
    setSelectedItem(prices[selectedIndex])
  };

  return(
    <Wrapper>
      <Header>
        <Span>Тип</Span>
        <Span>Ціна</Span>
      </Header>
      <PriceOptionList>
        {prices.map(item => (
          <PriceOption priceItem={item} isChecked={item.id === selectedItem.id} onChange={handleChange}/>))}
      </PriceOptionList>
      <Footer>
        <SelectedItemPrice>{selectedItem.price} грн</SelectedItemPrice>
        <Button onClick={handleClick}>До кошика</Button>
      </Footer>
    </Wrapper>
  )
};

export default ProductEquipmentCard;
