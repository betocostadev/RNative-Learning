import { Dimensions, StyleSheet } from 'react-native'

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
  top: {
    resizeMode: 'cover',
    width: '100%',
    height: (578 / 768) * screenWidth,
  },
  title: {
    width: '100%',
    paddingTop: 4,
    color: 'white',
    position: 'absolute',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    zIndex: 2,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  basketName: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  farmLogo: {
    width: 48,
    height: 48,
  },
  farmName: {
    alignSelf: 'center',
    marginLeft: 12,
    fontSize: 16,
    lineHeight: 26,
  },
  description: {
    fontWeight: 'light',
    color: '#A3A3A3',
    fontSize: 18,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 42,
    marginTop: 8,
  },
})

export default styles
