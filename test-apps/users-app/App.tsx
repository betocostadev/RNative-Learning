import { StatusBar } from 'expo-status-bar'
import { CountryProvider } from './providers/CountryProvider'

import './gesture-handler'
import Routes from './routes'

export default function App() {
  return (
    <CountryProvider>
      <Routes />
      <StatusBar style="auto" />
    </CountryProvider>
  )
}
