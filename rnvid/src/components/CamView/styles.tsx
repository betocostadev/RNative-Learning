import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  menuContainer: {
    flex: 2,
    borderColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  menuContainerRight: {
    height: '100%',
    paddingTop: 70,
    paddingRight: 12,
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flex: 0.5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  elapsedTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonRecord: {
    width: 64,
    height: 64,
    marginBottom: 12,
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 50,
    backgroundColor: '#c12323',
  },
  buttonRecordStop: {
    borderColor: '#c1c1c1dc',
    backgroundColor: '#fdfdfde2',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
})
