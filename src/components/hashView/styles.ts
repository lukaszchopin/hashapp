import { StyleSheet } from 'react-native';
import { AppStyles, Colors } from '../../global';

export default StyleSheet.create({
  container: {
    marginTop: 16,
    alignSelf: 'stretch'
  },
  hashContainer: {
    alignSelf: 'stretch',
    borderColor: Colors.queenBlue,
    borderWidth: 1,
    borderRadius: 3
  },
  hash: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.richBlack
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.queenBlue,
    marginBottom: 6
  }
});
