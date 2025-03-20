import React, {useState, useRef, useEffect} from 'react';

import {Box, Text, Title, Spacer, Input, Touchable} from '../';
import SegmentedPicker from 'react-native-segmented-picker';

const PaymentForms = ({onChange = creditCard => {}}) => {
  const pickerRef = useRef(null);
  const [data, setData] = useState({
    holder_name: '',
    credit_card_number: '',
    valid_date: '',
    cvv: '',
  });

  useEffect(() => {
    onChange(data);
  }, [data, onChange]);
  return (
    <>
      <SegmentedPicker
        ref={pickerRef}
        onConfirm={data =>
          setData({...data, valid_date: data.month + '/' + data.year})
        }
        options={[
          {
            key: 'month',
            items: [
              {label: 'Option 1', value: 'option_1'},
              {label: 'Option 2', value: 'option_2'},
            ],
          },
          {
            key: 'year',
            items: [{label: 'Option 3', value: 'option_3'}],
          },
        ]}
      />
      <Box>
        <Title variant="small">Select and enter your payment details</Title>
        <Spacer />
        <Text>By continuing you agree to our Terms</Text>
        <Spacer size="20px" />
        <Input
          placeholder="Holder Name"
          value={data.holder_name}
          onChangeText={holder_name => setData({...data, holder_name})}
        />
        <Spacer />
        <Input
          placeholder="Credit Card number"
          value={data.credit_card_number}
          onChangeText={credit_card_number =>
            setData({...data, credit_card_number})
          }
        />
        <Spacer />
        <Touchable width="100%" onPress={() => pickerRef.current.show()}>
          <Input pointerEvents="none" editable={false} placeholder="25/09" />
          <Spacer />
        </Touchable>
        <Spacer />
        <Box row>
          <Box spacing="0 10px 0 0">
            <Input
              placeholder="CVV"
              value={data.cvv}
              onChangeText={cvv => setData({...data, cvv})}
            />
          </Box>

          <Box>
            <Spacer />
            <Text variant="small">
              3 or 4 digits usually found on the signature strip
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PaymentForms;
