import React from 'react';
import {StretchyScrollView} from 'react-native-stretchy';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Header from '../../components/Header';
import Picker from '../../components/Picker';
import {Touchable, Box, Title, Text, Spacer, Button} from '../../components';

import util from '../../util';
import {colors} from '../../styles/theme.json';

const Product = () => {
  return (
    <>
      <Header
        title="Striped cardigan"
        goBack
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => alert('teste')}>
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      <StretchyScrollView
        image={{
          uri: 'https://bonnierpublications.com/app/uploads/2022/05/woman-1-480x630.jpg',
        }}
        imageOverlay={<Box background={util.toAlpha(colors.dark, 40)}></Box>}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title bold color="light" variant="big">
              R$1080
            </Title>
          </Box>
        }>
        <Box hasPadding background="light">
          <Text color="black">TSHIRT</Text>
          <Spacer size="20px" />
          <Title color="black">A.P.C Collection Spring 2025</Title>
          <Spacer size="30px" />
          <Text color="dark">
            Enjoyhe the look of the new collection cotton all over your body.
            This item fit your boddy and warm you up all over and during spring.
            This item will fit your body and warm you up all over and during
            spring
          </Text>
          <Spacer size="30px" />
          <Picker
            title="Size"
            options={[
              {label: 'P', value: 'P'},
              {label: 'M', value: 'M'},
              {label: 'G', value: 'G'},
              {label: 'XG', value: 'XG'},
            ]}
            initialValue="M"
            onChange={value => alert(value)}
          />
          <Spacer size="30px" />
          <Button block>
            <Text color="light">Add to cart</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  );
};

export default Product;
