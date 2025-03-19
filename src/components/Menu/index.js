import React from 'react';
import {Box, Text, Button, Spacer} from '..';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../styles/theme.json';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const {navigate} = useNavigation();
  return (
    <Box hasPadding fluid>
      <Button block onPress={() => navigate('Marketplace')}>
        <Text color="light"> Marketplace </Text>
      </Button>
      <Spacer />
      <Button block onPress={() => navigate('Category')}>
        <Text color="light"> Category</Text>
      </Button>
      <Spacer />
      <Button block onPress={() => navigate('Product')}>
        <Text color="light"> Product</Text>
      </Button>
    </Box>
  );
};
export default Menu;
