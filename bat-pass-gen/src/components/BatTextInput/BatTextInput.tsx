import { TextInput } from 'react-native'
import { styles } from './BatTextInputStyles'

interface BatTextInputProps {
  pass: string
}

export default function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput style={styles.input} placeholder="Pass" value={props.pass} />
  )
}
