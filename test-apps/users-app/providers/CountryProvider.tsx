import { useState } from 'react'
import { CountryContext } from '../contexts/CountryContext'

interface CountryProviderProps {
  children: React.ReactNode
}

export const CountryProvider = ({ children }: CountryProviderProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('All')

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  )
}
