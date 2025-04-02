import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import api from '../../services/api';
import {Box, Spacer, Text, Title, Button, Input} from '../../components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignIn = ({navigation: {navigate, replace}}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const requestLogin = async () => {
    try {
      const { data: userData} = await api.get('/users'), {
        params: {
          email: user.email,
          password: user.password,
        },
      };
    }catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box hasPadding justify="center" align="center" background="light">
        <Icon name="star" size={50} color="#000" />
        <Title bold variant="big">
          LOOKAPP
        </Title>
        <Spacer size="50px" />
        <Title bold>SignIn my account </Title>
        <Spacer size="50px" />
        <Input
          placeholder="E-mail"
          value={user.email}
          onChangeText={email => setUser({...user, email})}
        />
        <Spacer />
        <Input
          placeholder="Password"
          secureTextEntry
          value={user.password}
          onChangeText={password => setUser({...user, password})}
        />
        <Spacer size="50px" />
        <Button block onPress={() => requestLogin()}>
          <Text color="light"> Sign in into my account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline onPress={() => navigate('Signup')}>
          Create new account
        </Text>
      </Box>
    </>
  );
};

export default SignIn;
