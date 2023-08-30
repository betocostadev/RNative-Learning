import green from '../assets/producers/green.png'
import salad from '../assets/producers/salad.png'
import jennyJack from '../assets/producers/jenny-jack.png'
import grow from '../assets/producers/grow.png'
import potager from '../assets/producers/potager.png'

import aspargus from '../assets/vegetables/aspargus.png'
import tomato from '../assets/vegetables/tomato.png'
import broccoli from '../assets/vegetables/broccoli.png'
import potato from '../assets/vegetables/potato.png'
import cucumber from '../assets/vegetables/cucumber.png'
import pumpkin from '../assets/vegetables/pumpkin.png'
import carrots from '../assets/vegetables/carrots.png'
import carrots2 from '../assets/vegetables/carrots2.png'
import vegetables from '../assets/vegetables/vegetables.png'

const genRandomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const producers = {
  list: [
    {
      name: 'Green',
      image: green,
      distance: genRandomNum(1, 500),
      stars: genRandomNum(1, 5),
      baskets: [
        {
          details: {
            name: 'Broccoli and Cucumber',
            description:
              'The best harvested products in your basket and soon at your home',
            price: '$ 40,00',
            image: cucumber,
          },
          items: [
            {
              name: 'Broccoli',
              image: broccoli,
            },
            {
              name: 'Cucumber',
              image: cucumber,
            },
          ],
        },
        {
          details: {
            name: 'Broccoli',
            description:
              'The best harvested products in your basket and soon at your home',
            price: 'R$ 40,00',

            image: broccoli,
          },
          items: [
            {
              name: 'Broccoli',
              image: broccoli,
            },
          ],
        },
      ],
    },
    {
      name: 'Salad',
      image: salad,
      distance: genRandomNum(1, 500),
      stars: genRandomNum(1, 5),
      baskets: [
        {
          details: {
            name: 'Full Salad',
            description:
              'A beautiful basket with the best harvested products and ready to be eaten',
            price: '$ 40,00',

            image: vegetables,
          },
          items: [
            {
              name: 'Tomato',
              image: tomato,
            },
            {
              name: 'Broccoli',
              image: broccoli,
            },
            {
              name: 'Pepino',
              image: cucumber,
            },
          ],
        },
        {
          details: {
            name: 'Tomato and cucumber',
            description:
              'Want some cucumber? With tomatos they are great, and better yet, from our farm',
            price: '$ 25,00',

            image: tomato,
          },
          items: [
            {
              name: 'Tomato',
              image: tomato,
            },
            {
              name: 'Pepino',
              image: cucumber,
            },
          ],
        },
      ],
    },
    {
      name: 'Jenny Jack Farm',
      image: jennyJack,
      distance: genRandomNum(1, 500),
      stars: genRandomNum(1, 5),
      baskets: [
        {
          details: {
            name: 'Lots of potatoes',
            description: 'Who doesnt love a lot of potatoes?',
            price: 'R$ 40,00',

            image: potato,
          },
          items: [
            {
              name: 'Potato',
              image: potato,
            },
          ],
        },
        {
          details: {
            name: 'Tomato and broccoli',
            description: 'Great to make a healty and tasty salad, try it now!',
            price: '$ 30,00',

            image: broccoli,
          },
          items: [
            {
              name: 'Tomato',
              image: tomato,
            },
            {
              name: 'Broccoli',
              image: broccoli,
            },
          ],
        },
      ],
    },
    {
      name: 'Grow',
      image: grow,
      distance: genRandomNum(1, 500),
      stars: genRandomNum(1, 5),
      baskets: [
        {
          details: {
            name: 'Pumpkin and Aspargus',
            description:
              'The best harvested products in your basket and soon at your home with just a click',
            price: '$ 28,00',

            image: aspargus,
          },
          items: [
            {
              name: 'Abóbora',
              image: pumpkin,
            },
            {
              name: 'Aspargus',
              image: aspargus,
            },
          ],
        },
        {
          details: {
            name: 'Tomato and Pumpkin',
            description:
              'The best harvested products in your basket and soon at your home with just a click',
            price: '$ 28,00',

            image: pumpkin,
          },
          items: [
            {
              name: 'Tomato',
              image: tomato,
            },
            {
              name: 'Pumpkin',
              image: pumpkin,
            },
          ],
        },
      ],
    },
    {
      name: 'Potager',
      image: potager,
      distance: genRandomNum(1, 500),
      stars: genRandomNum(1, 5),
      baskets: [
        {
          details: {
            name: 'Cucumber',
            description:
              'The best harvested products in your basket and soon at your home with just a click',
            price: '$ 20,00',

            image: cucumber,
          },
          items: [
            {
              name: 'Cucumber',
              image: cucumber,
            },
          ],
        },
        {
          details: {
            name: 'Broccoli, Aspargus and Carrot',
            description:
              'The best harvested products in your basket and soon at your home with just a click',
            price: '$ 45,00',

            image: carrots2,
          },
          items: [
            {
              name: 'Broccoli',
              image: broccoli,
            },
            {
              name: 'Aspargus',
              image: aspargus,
            },
            {
              name: 'Carrot',
              image: carrots,
            },
          ],
        },
      ],
    },
  ],
}

export default producers
