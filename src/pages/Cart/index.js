import React, {useState} from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Product from '../../components/Product';
import PaymentForms from '../../components/Forms/payment';

import colors from '../../styles/theme.json';
import util from '../../util';
import {ScrollView, Title, Spacer, Box, Text, Button} from '../../components';

const Cart = () => {
  const [tab, setTab] = useState('payment');
  return (
    <>
      <Header title="Cart" goBack />
      <Tabs
        tabs={[
          {label: 'Cart', value: 'cart'},
          {label: 'Payment', value: 'payment'},
        ]}
        active={tab}
        onChange={value => setTab(value)}
      />
      <ScrollView hasPadding background="light">
        <Spacer size="20px" />
        <Title variant="small">Order number is 458765342</Title>
        <Spacer size="20px" />
        {tab === 'cart' && (
          <>
            {Array.from(Array(3))?.map(item => (
              <Product
                cover="https://bonnierpublications.com/app/uploads/2022/05/woman-1-480x630.jpg"
                brand="Raf Simons"
                title="Large striped cardigan"
                price="R$1080"
                selected
              />
            ))}
            <Spacer size="30px" />
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Order:</Text>
              <Text color="dark">$445.00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Discount:</Text>
              <Text color="sucess">$-44.50</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Delivery:</Text>
              <Text color="dark">$10.00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark" bold>
                Total Order:
              </Text>
              <Text color="dark" bold>
                $410.50
              </Text>
            </Box>
            <Spacer size="30px" />
            <Button block onPress={() => setTab('payment')}>
              <Text color="light">Place Order</Text>
            </Button>
          </>
        )}

        {tab === 'payment' && (
          <>
            <Spacer size="20px" />
            <Box
              row
              width="100%"
              justify="space-between"
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: util.toAlpha(colors.muted, 50),
                paddingBottom: 10,
              }}>
              <Text color="dark" bold>
                Shipping address
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Spacer />
            <Text>
              Tiana Rosser, 4517 Washington Ave Manchester, Kentucky 39495
              United States
            </Text>
            <Spacer size="30px" />
            <Box
              row
              width="100%"
              justify="space-between"
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: util.toAlpha(colors.muted, 50),
                paddingBottom: 10,
              }}>
              <Text color="dark" bold>
                Delivery details
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Spacer />
            <Text color="dark">Standard Delivery</Text>
            <Text color="dark">Saturday 27 - Tuesday 30</Text>
            <Text color="dark">Cost: $10</Text>
            <Spacer size="30px" />
            <PaymentForms
              onChange={creditCardData => console.log(creditCardData)}
            />
            <Spacer size="30px" />
            <Button block onPress={() => {}}>
              <Text color="light">Confirmation</Text>
            </Button>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Cart;
