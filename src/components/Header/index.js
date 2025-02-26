import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Box, Title, Touchable} from '../../components';
import {colors} from '../../styles/theme.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';

const Header = () => {
  // const navigation = useNavigation();
  return (
    <>
      <StatusBar />
      <Box
        fluid
        height="100px"
        justify="center"
        border={`1px solid ${colors.muted}50`}>
        <SafeAreaView style={{flexDirection: 'row'}}>
          <Touchable width="80px" justify="center" align="center">
            <Icon name="menu" size={20} />
          </Touchable>
          <Touchable align="center">
            <Title>Explore</Title>
          </Touchable>
          <Touchable width="80px"></Touchable>
        </SafeAreaView>
      </Box>
    </>
  );
};

export default Header;
