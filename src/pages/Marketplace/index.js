import React from 'react';
import Header from '../../components/Header';
import CategoryList from '../../components/Category/list';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Box, Text, Touchable} from '../../components';

const Markteplace = () => {
  return (
    <>
      <Header
        title="Categories"
        right={() => (
          <Touchable hasPadding width="80px">
            <Icon name="bag" size={20} onPress={() => alert('teste')} />
          </Touchable>
        )}
      />
      <CategoryList />
    </>
  );
};

export default Markteplace;
