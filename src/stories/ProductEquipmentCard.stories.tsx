import * as React from 'react'
import { action } from "@storybook/addon-actions";

import ProductEquipmentCard from "../components/ProductEquipmentCard";

import data from "../data/data";

const Default: React.FC = () => {
  return (
    <>
      <ProductEquipmentCard prices = {data} onSubmit={action('Submit')}  />
    </>
  )
};


export { Default }

export default {
  title: 'Common/ProductEquipmentCard'
}
