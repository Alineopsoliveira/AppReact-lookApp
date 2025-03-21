import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Box, Text, Title, Spacer} from '../';
import {colors} from '../../styles/theme.json';
import util from '../../util';

const Order = () => {
  return (
    <Box
      radius="5px"
      spacing="0px 0px 10px 0"
      border={`1px solid ${colors.muted}`}>
      <Box
        hasPadding
        row
        justify="space-between"
        width="100%"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}>
        <Box row align="center">
          <Icon name="check" size={20} color={colors.sucess} />
          <Text color="sucess" spacing="0 0 0 10px">
            DELIVERED
          </Text>
        </Box>

        <Text>August 17, 2016 3:58 PM</Text>
      </Box>
      <Box
        hasPadding
        width="100%"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}>
        <Title>Order №1947034</Title>
        <Spacer />
        <Text>
          Tracking number: <Text color="dark">123456789</Text>{' '}
        </Text>
      </Box>
      <Box hasPadding row justify="space-between" width="100%">
        <Text>
          VALUE OF ITEMS <Text color="dark">$19.68</Text>{' '}
        </Text>
        <Text>
          QUANTITY <Text color="dark">3</Text>{' '}
        </Text>
      </Box>
    </Box>
  );
};

export default Order;
