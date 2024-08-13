import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 100,
  },
  button: {
    padding: 12,
  },
  closeButton: {
    position: 'absolute',
    top: 48,
    right: 12,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomMenu: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fcfcfc9e',
    width: '100%',
    height: '10%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  noCameraSection: {
    alignItems: 'center',
  },
  noCameraText: { fontSize: 20, fontWeight: 'bold' },
})
