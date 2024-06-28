import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4D4D4D',
  },
  button: {
    backgroundColor: 'black',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
  },
  miniButton: {
    backgroundColor: 'black',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    marginHorizontal: 8,
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 5,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#E5BF3C',
    fontWeight: 'bold',
  },
  sizeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
})
