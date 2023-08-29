import {useEffect, useState} from 'react'
import {IProducer} from '../types/producers'
import {getProducers} from '../services/gen-data'

export default function useProducers() {
  const [title, setTitle] = useState('')
  const [producers, setProducers] = useState<IProducer[]>([])

  const getData = async () => {
    try {
      const data = getProducers()
      if (data) {
        setTitle(data.title)
        setProducers(data.list as IProducer[])
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [producers])

  return {title, producers}
}
