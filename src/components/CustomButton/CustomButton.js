import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
  container_TETIARY: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
