import { NavigationProp } from '@react-navigation/native'
import { Alert, Button, Image, Linking, Text, View } from 'react-native'
import { styles } from './HomeScreenStyles'
import LinkButton from '../components/Home/LinkButton'
import ProfilePicture from '../components/Shared/ProfilePicture'

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>
}) {
  const navToSkills = () => navigation.navigate('Skills')

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    } else {
      Alert.alert(`Link is not supported: ${url}`)
    }
  }

  return (
    <View style={styles.container}>
      <ProfilePicture />
      <Text style={styles.title}>Roberto Costa</Text>
      <View style={{ width: '70%' }}>
        <LinkButton
          title="LinkedIn"
          icon="linkedin-square"
          background="#3e42ff"
          fn={() => openLink('https://www.linkedin.com/in/robertomcosta/')}
        />
        <LinkButton
          title="Github"
          icon="github"
          background="#2b2b2b"
          fn={() => openLink('https://github.com/betocostadev')}
        />
        <LinkButton
          title="Email"
          icon="mail"
          background="#ff2525"
          fn={() => openLink('mailto://betocosta@gmail.com')}
        />
      </View>
      <Button title="Check my Skills" onPress={navToSkills} />
    </View>
  )
}
