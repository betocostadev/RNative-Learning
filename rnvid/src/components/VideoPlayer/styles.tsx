import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
  },
  menuButtons: {
    width: '90%',
    borderColor: 'red',
    maxHeight: '10%',
    paddingTop: 14,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
