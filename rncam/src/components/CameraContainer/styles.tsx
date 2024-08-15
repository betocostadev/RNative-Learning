import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    padding: 8,
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
    backgroundColor: '#fcfcfc51',
    width: '100%',
    height: '12.5%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 20,
  },
  zoomContainer: {
    position: 'absolute',
    right: 30,
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomText: {
    fontSize: 16,
    color: 'white',
    paddingBottom: 12,
  },
  zoomBtns: {
    paddingVertical: 10,
  },
})
