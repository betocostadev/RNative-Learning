import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  imageLogo: {
    flex: 1,
    width: '65%',
    resizeMode: 'contain',
  },
  carBrand: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 18,
    fontStyle: 'italic',
  },
  carModel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  carImage: {
    flex: 1,
    marginBottom: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  priceLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    marginTop: 14,
  },
  priceLabel: {
    color: '#fff',
    fontSize: 20,
  },
  smallButton: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: '#01A6B3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    padding: 1,
  },
})
