import React from 'react';
import {Touchable, Box, Text, Cover} from '..';
import {colors} from '../../styles/theme.json';

const Story = () => {
  return (
    <Touchable
      onPress={() => alert('teste')}
      background="black"
      radius="10px"
      height="190px"
      width="150px"
      spacing="0px 5px 0px">
      <Cover
        image="https://bonnierpublications.com/app/uploads/2022/05/woman-1-480x630.jpg"
        height="100%"
        width="100%">
        <Box
          fluid
          hasPadding
          background={`${colors.dark}80`}
          justify="space-between">
          <Cover
            circle
            width="40px"
            height="40px"
            border={`1px solid ${colors.light}`}
            image="https://bonnierpublications.com/app/uploads/2022/05/woman-1-480x630.jpg"
          />
          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              AlineOliveira
            </Text>
            <Text color="light" variant="small">
              2 min ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
};

export default Story;
