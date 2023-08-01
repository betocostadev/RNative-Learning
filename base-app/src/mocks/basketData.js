import logo from '../../assets/logo.png'
import broccoli from '../../assets/fruits/broccoli.png'
import pep from '../../assets/fruits/pep.png'
import potato from '../../assets/fruits/potato.png'
import pumpkin from '../../assets/fruits/pumpkin.png'
import tomato from '../../assets/fruits/tomato.png'

const basketData = {
  top: {
    title: 'Basket details',
  },
  details: {
    name: 'Vegetables Basket',
    farmName: 'Jenny Jack Farm',
    description:
      'Some whatever mixed with much more whatever in a way that whatever. Get it now in this super promotion!',
    logo,
    price: 'CAD$ 9,75',
    button: 'Buy',
  },
  items: {
    title: 'Basket Items',
    list: [
      {
        name: 'Tomato',
        image: tomato,
      },
      {
        name: 'Broccoli',
        image: broccoli,
      },
      {
        name: 'Potato',
        image: potato,
      },
      {
        name: 'Pepino',
        image: pep,
      },
      {
        name: 'Pumpkin',
        image: pumpkin,
      },
    ],
  },
}

export default basketData
