/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet, useColorScheme} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import Home from './src/screens/Home'
import useProducers from './src/hooks/useProducers'
import Basket from './src/screens/Basket'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const producers = useProducers(false)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Home bestProducers={false} />
      {/* {producers.length > 0 && <Basket producer={producers[0]} />} */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
