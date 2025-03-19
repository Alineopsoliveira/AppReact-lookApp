import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Text, Touchable, Cover, Title, Spacer, Box} from '../../components/';
import {colors} from '../../styles/theme.json';
import util from '../../util';
const Category = ({title, description}) => {
  const {navigate} = useNavigation();
  return (
    <Touchable
      onPress={() => navigate('Category')}
      width="100%"
      height="180px"
      radius="10px"
      spacing="10px 0px">
      <Cover
        width="100%"
        height="100%"
        image="https://bonnierpublications.com/app/uploads/2022/05/woman-1-480x630.jpg">
        <Box
          width="100%"
          justify="center"
          align="center"
          hasPadding
          background={util.toAlpha(colors.black, 50)}>
          <Text color="light" bold>
            {title}
          </Text>
          <Spacer />
          <Text color="light">{description}</Text>
        </Box>
      </Cover>
    </Touchable>
  );
};
export default Category;
