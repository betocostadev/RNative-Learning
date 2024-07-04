import { createContext } from 'react'

interface ICountryContext {
  selectedCountry: string
  setSelectedCountry: (country: string) => void
}

export const CountryContext = createContext<ICountryContext | undefined>(
  undefined
)
