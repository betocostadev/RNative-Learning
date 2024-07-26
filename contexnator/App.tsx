import { StatusBar } from 'expo-status-bar'
import './gesture-handler'
import { Routes } from './routes'

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  )
}
