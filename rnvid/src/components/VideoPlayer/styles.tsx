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
    maxHeight: '10%',
    paddingTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
})
