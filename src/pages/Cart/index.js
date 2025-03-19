import React, {useState} from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import {ScrollView} from '../../components';

const Cart = () => {
  const [tab, setTab] = useState('cart');
  return (
    <>
      <Header title="Cart" goBack />
      <Tabs
        tabs={[
          {label: 'Cart', value: 'cart'},
          {label: 'Payment', value: 'payment'},
        ]}
        active={tab}
        OnChange={value => setTab(value)}
      />
    </>
  );
};

export default Cart;
