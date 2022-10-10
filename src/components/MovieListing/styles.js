import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listing: {
    margin: 20,
  },
  container: {
    display: grid,
    //gridTemplateColumns: repeat(auto - fill, minmax(220, 1)),
    gap: 15,
  },
  title: {
    color: '#79b8f3',
    marginBottom: 10,
    fontWeight: 400,
  },
});

export default styles;
