import * as React from 'react'
import ProductEquipmentCard from "./components/ProductEquipmentCard";
import data from "./data/data";

const Regular: React.FC = () => (
  <>
    <ProductEquipmentCard prices = {data} onSubmit={selectedPriceOption => console.dir(selectedPriceOption)}  />
  </>
);

export { Regular }

export default {
  title: 'Common/TestApp',
}
