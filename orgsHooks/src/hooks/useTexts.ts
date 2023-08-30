import {useState, useEffect} from 'react'

import {getTexts} from '../services/gen-data'

export default function useTexts() {
  const [texts, setTexts] = useState({})

  useEffect(() => {
    const data = getTexts()
    setTexts(data)
  }, [])

  return texts
}
