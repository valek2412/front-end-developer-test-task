import * as React from 'react'
import PriceOption from '../components/PriceOption'

import data from "../data/data";

const Default: React.FC = () => {
  return (
    <>
    <PriceOption priceItem = {data[0]} isChecked={false} />
    </>
  )
};

const Checked: React.FC = () => {
  return (
    <>
      <PriceOption priceItem = {data[0]} isChecked={true} />
    </>
  )
};

export { Default, Checked }

export default {
  title: 'Common/PriceOption',
}
