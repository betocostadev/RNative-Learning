import green from '../assets/producers/green.png'
import salad from '../assets/producers/salad.png'
import jennyJack from '../assets/producers/jenny-jack.png'
import grow from '../assets/producers/grow.png'
import potager from '../assets/producers/potager.png'

const genRandomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const producers = {
  title: 'Producers',
  list: [
    {
      name: 'Green',
      image: green,
      distance: `${genRandomNum(1, 500)}m`,
      stars: genRandomNum(1, 5),
    },
    {
      name: 'Salad',
      image: salad,
      distance: `${genRandomNum(1, 500)}m`,
      stars: genRandomNum(1, 5),
    },
    {
      name: 'Jenny Jack Farm',
      image: jennyJack,
      distance: `${genRandomNum(1, 500)}m`,
      stars: genRandomNum(1, 5),
    },
    {
      name: 'Grow',
      image: grow,
      distance: `${genRandomNum(1, 500)}m`,
      stars: genRandomNum(1, 5),
    },
    {
      name: 'Potager',
      image: potager,
      distance: `${genRandomNum(1, 500)}m`,
      stars: genRandomNum(1, 5),
    },
  ],
}

export default producers
