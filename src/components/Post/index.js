import React from 'react';
import {Box, Text, Touchable, Cover, Spacer} from '..';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../styles/theme.json';

const Post = () => {
  return (
    <Box hasPadding fluid>
      <Box row align="center">
        <Cover
          image="https://bonnierpublications.com/app/uploads/2022/05/woman-1-480x630.jpg"
          width="40px"
          height="40px"
          circle
        />
        <Box spacing="0 0 0 10px">
          <Text bold color="dark">
            AlineOliveira
          </Text>
          <Text variant="small">2 min ago</Text>
        </Box>
        <Touchable height="30px" width="100px" align="flex-end">
          <Icon name="options" size={15} color={colors.muted} />
        </Touchable>
      </Box>
      <Cover
        image="https://bonnierpublications.com/app/uploads/2022/05/woman-1-480x630.jpg"
        width="100%"
        height="190px"
        spacing="10px 0"
        radius="10px"
      />
      <Box row fluid align="center">
        <Box row fluid align="center">
          {Array.from(Array(3))?.map(item => (
            <Cover
              circle
              width="30px"
              height="30px"
              border={`1px solid ${colors.light}`}
              spacing="0px -15px 0px 0px"
              image="https://bonnierpublications.com/app/uploads/2022/05/woman-1-480x630.jpg"
            />
          ))}
          <Text variant="small" spacing="0px 20px">
            Liked by 10,098
          </Text>
        </Box>
        <Box row justify="flex-end">
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="heart" size={24} color={colors.danger} />
          </Touchable>
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="bubble" size={24} color={colors.muted} />
          </Touchable>
          <Touchable width="24px">
            <Icon name="share" size={24} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Spacer />
      <Text color="dark" small>
        {' '}
        Interview: SHoe Designer John Fluevog On New Book, Spirituality And
        'Slow Fashion'
      </Text>
    </Box>
  );
};
export default Post;
