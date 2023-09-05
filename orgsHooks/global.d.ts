declare module '*.png' {
  const value: import('react-native').ImageSourcePropType
  export default value
}

// declare module '*.svg' {
//   const content: React.ElementType<React.ComponentPropsWithRef<'svg'>>
//   export default content
// }

declare module '*.svg' {
  import React from 'react'
  import {SvgProps} from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
