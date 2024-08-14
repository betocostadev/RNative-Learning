import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  modalImage: {
    width: '100%',
    height: '60%',
    borderRadius: 20,
  },
  modalFooter: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalFooterText: {
    marginVertical: 6,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  modalBtnContainer: {
    width: '40%',
    flexDirection: 'row',
    marginTop: 18,
    alignContent: 'center',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
})
