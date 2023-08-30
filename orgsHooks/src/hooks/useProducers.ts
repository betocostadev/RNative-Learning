import {useEffect, useState} from 'react'
import {IProducer} from '../types/producers'
import {getProducers} from '../services/gen-data'

export default function useProducers(bestProducers: boolean) {
  const [producers, setProducers] = useState<IProducer[]>([])

  const getData = async () => {
    try {
      const data = getProducers()

      if (data) {
        const list = data.list.sort(
          (prod1, prod2) => prod1.distance - prod2.distance,
        )

        setProducers(
          bestProducers
            ? (list.filter(producer => producer.stars > 3) as IProducer[])
            : (list as IProducer[]),
        )
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [producers])

  return producers
}
