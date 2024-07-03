import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    margin: 10,
  },
  logoContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  form: {
    margin: 10,
  },
  lineInput: {
    borderWidth: 2,
    borderColor: '#4f4f4f',
    borderRadius: 6,
    padding: 6,
  },
  areaInput: {
    borderWidth: 2,
    borderColor: '#4f4f4f',
    borderRadius: 6,
    padding: 6,
    height: '24%',
  },
  inputLabel: {
    fontSize: 16,
    marginVertical: 10,
  },
  inputHint: {
    fontSize: 12,
    marginVertical: 6,
    marginHorizontal: 2,
    fontWeight: 'light',
  },
  helpBtn: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 28,
    backgroundColor: '#3a3a3a',
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 8,
    width: '100%',
  },
  helpBtnDisabled: {
    backgroundColor: '#9a9a9a',
  },
  helpBtnText: {
    fontSize: 20,
    color: '#fff',
  },
})
