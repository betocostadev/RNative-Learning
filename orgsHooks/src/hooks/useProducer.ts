import {useEffect, useState} from 'react'
import {IProducer} from '../types/producers'
import {getProducers} from '../services/gen-data'

export default function useProducer(name: string) {
  const [producer, setProducer] = useState<IProducer | undefined>(undefined)

  const getData = async () => {
    try {
      const data = getProducers()

      if (data) {
        const producer = data.list.find(prod => prod.name === name)
        if (producer) {
          setProducer(producer)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [name])

  return producer
}
