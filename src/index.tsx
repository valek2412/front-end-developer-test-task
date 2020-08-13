import * as React from 'react'
import ProductEquipmentCard from "./components/ProductEquipmentCard";
import data from "./data/data";

const TestApp = () => (
  <>
    <ProductEquipmentCard prices = {data} onSubmit={selectedPriceOption => console.dir(selectedPriceOption)}  />
  </>
);

export default TestApp;
