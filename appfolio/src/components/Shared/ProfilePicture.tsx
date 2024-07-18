import { Image } from 'react-native'
import profile from '../../../assets/profile.jpg'
import { styles } from './ProfilePictureStyles'

export default function ProfilePicture() {
  return <Image source={profile} style={styles.profileImage} />
}
