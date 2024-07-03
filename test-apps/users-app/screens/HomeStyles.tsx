import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  filterText: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 6,
    marginHorizontal: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  countryOption: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 20,
    borderWidth: 0,
  },
  countryOptionText: {
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: '#1d77ff',
  },
})
