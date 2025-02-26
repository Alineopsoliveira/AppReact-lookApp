import React from 'react';
import {Box, Spacer, Text, Title, Button, Input} from '../../components';
import {StatusBar} from 'react-native';

import {useNavigation} from '@react-navigation/native';
const SignUp = () => {
  const {navigate, goBack, canGoBack} = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box hasPadding justify="center" align="center" background="light">
        <Title bold>Create new account.</Title>
        <Spacer />
        <Text> Enter your details below:</Text>

        <Spacer size="50px" />

        <Input placeholder="Name" />
        <Spacer />
        <Input placeholder="Email" />
        <Spacer />
        <Input placeholder="Password" secureTextEntry />
        <Spacer size="50px" />
        <Button block onPress={() => navigate('Feed')}>
          <Text color="light">Create new account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline onPress={() => goBack()}>
          Back to home
        </Text>
      </Box>
    </>
  );
};

export default SignUp;
