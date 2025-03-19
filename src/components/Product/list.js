import React from 'react';
import {ScrollView, Text} from '../../components/';
import Product from '.';
const ProductList = () => {
  return (
    <ScrollView fluid>
      {Array.from(Array(20))?.map(item => (
        <Product
          cover="https://bonnierpublications.com/app/uploads/2022/05/woman-1-480x630.jpg"
          brand="Raf Simons"
          title="Large striped cardigan"
          price="R$1080"
        />
      ))}
    </ScrollView>
  );
};
export default ProductList;
