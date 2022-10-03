import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  backColor,
  frontColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        backColor ? {backgroundColor: backColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          frontColor ? {color: frontColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
