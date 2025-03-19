import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Box, Title, Touchable} from '../../components';
import {colors} from '../../styles/theme.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import util from '../../util';

const Header = ({title = 'Explore', right = null, goBack = false}) => {
  const {navigate} = useNavigation();
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: util.toAlpha(colors.muted, 5),
        backgroundColor: colors.light,
      }}>
      <StatusBar />
      <SafeAreaView
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Touchable
          width="70px"
          justify="center"
          align="center"
          hasPadding
          onPress={() => navigate('Menu')}>
          <Icon name={!goBack ? 'menu' : 'arrow-left'} size={20} />
        </Touchable>
        <Touchable align="center">
          <Title>{title}</Title>
        </Touchable>
        {right ? right() : <Touchable hasPadding width="70px" />}
      </SafeAreaView>
    </View>
  );
};

export default Header;
