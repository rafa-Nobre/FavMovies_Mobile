import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#3393ED',
  },
  container_SECONDARY: {
    borderColor: '#3393ED',
    borderWidth: 2,
  },
  container_TETIARY: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_SECONDARY: {
    color: '#3393ED',
  },
  text_TERTIARY: {
    color: 'gray',
  },
});

export default styles;
