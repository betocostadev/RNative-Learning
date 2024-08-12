import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { styles } from './styles'

const Spinner: React.FC = () => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#dfdff6" />
    </View>
  )
}

export default Spinner
