import { BatLogoStyles } from './BatLogoStyles'
import { Image, Text, View } from 'react-native'
import batLogo from '../../../assets/bat-logo.png'

export default function BatLogo() {
  return (
    <View>
      <Text style={BatLogoStyles.title}>BAT PASS GENERATOR</Text>
      <Image
        source={batLogo}
        style={{ resizeMode: 'contain', height: 180, margin: 10 }}
      />
    </View>
  )
}
