import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  closeBtn: { margin: 10, paddingBottom: 8, alignSelf: 'flex-end' },
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
    width: '50%',
    flexDirection: 'row',
    paddingTop: 22,
    justifyContent: 'space-between',
  },
  modalActionBtn: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#a9a9a9d2',
    borderWidth: 1,
    borderColor: '#9c9b9bd2',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
