import React from 'react';

import {Box, Title, Text, Spacer, Button, Cover} from '../';

const CongratsModal = () => {
  return (
    <Box
      background="light"
      hasPadding
      justify="center"
      align="center"
      style={{
        position: 'absolute',
        zIndex: 9999,
        width: '100%',
        height: '100%',
      }}>
      <Cover
        width="200"
        height="200"
        background="transparent"
        source={require('../../assets/check-circle.png')}
      />
      <Spacer size="50px" />
      <Title>Congratulations</Title>
      <Spacer />
      <Text>Your items are on the way and should arrive shortly</Text>
      <Spacer size="50px" />
      <Button block onPress={() => {}}>
        <Text color="light">Track your order</Text>
      </Button>
    </Box>
  );
};

export default CongratsModal;
