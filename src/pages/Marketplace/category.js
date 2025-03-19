import React from 'react';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ProductList from '../../components/Product/list';
import {Touchable} from '../../components';

const Category = () => {
  return (
    <>
      <Header
        title="Categoria X"
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => alert('teste')}>
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      <ProductList />
    </>
  );
};

export default Category;
