import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 0,
  },
  card: {
    position: 'relative',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f0f0f0',
    backgroundColor: '#fff',
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cardAvatar: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 10,
    borderWidth: 1,
  },
  cardHeader: {
    backgroundColor: '#e1e1e1',
    height: 75,
    zIndex: 2,
  },
  cardBody: {
    zIndex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  nameContainer: {
    marginTop: 50,
    padding: 10,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 18,
    fontWeight: '200',
  },
  title: {
    fontSize: 22,
    margin: 10,
  },
  cardInfo: {
    flex: 1,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minHeight: 50,
    paddingBottom: 10,
  },
})
