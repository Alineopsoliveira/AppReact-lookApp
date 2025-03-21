import React from 'react';
import {ScrollView, Text} from '../../components/';
import Order from '.';
const OrderList = () => {
  return (
    <ScrollView fluid background="light" hasPadding>
      {Array.from(Array(3))?.map(item => (
        <Order />
      ))}
    </ScrollView>
  );
};
export default OrderList;
