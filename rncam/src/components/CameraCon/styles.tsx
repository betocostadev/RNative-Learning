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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  noCameraSection: {
    alignItems: 'center',
  },
  noCameraText: {
    fontSize: 20,
    fontWeight: 'bold',
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
  zoomContainer: {
    position: 'absolute',
    right: 30,
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomText: {
    fontSize: 14,
    color: 'white',
    paddingBottom: 10,
  },
  zoomBtns: {
    paddingVertical: 10,
  },
})
