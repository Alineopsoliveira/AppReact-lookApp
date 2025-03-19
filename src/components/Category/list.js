import React from 'react';
import {ScrollView, Text} from '../../components/';
import Category from '.';
const CategoryList = () => {
  return (
    <ScrollView
      fluid
      style={{
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
      }}>
      {Array.from(Array(20))?.map(item => (
        <Category title={`Category`} description={'123 ITEMS'} />
      ))}
    </ScrollView>
  );
};
export default CategoryList;
