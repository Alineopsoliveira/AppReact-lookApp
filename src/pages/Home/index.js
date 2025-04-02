import React, {useContext} from 'react';

import {Title, Box, Text, Button, Spacer} from '../../components';
import {StatusBar} from 'react-native';

import {AppContext} from '../../contexts/app';
const Home = ({navigation}) => {
  const {name} = useContext(AppContext);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box hasPadding align="center" background="dark">
        <Box justify="center" align="center" fluid>
          <Title color="light" variant="big" bold>
            LOOKAPP
          </Title>
          <Spacer />
          <Text align="center" spacing="0px 40px">
            Stay on top of the fashion world and your favorite looks.{' '}
          </Text>
        </Box>
        <Box align="center" fluid justify="flex-end">
          <Button block onPress={() => navigation.navigate('Signin')}>
            <Text color="light">Sign In my account</Text>
          </Button>
          <Spacer size="30px" />
          <Text
            underline
            color="light"
            onPress={() => navigation.navigate('Signup')}>
            Create new account
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;
