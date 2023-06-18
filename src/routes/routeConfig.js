import Main from '../pages/Main'
import Rolles from '../pages/Rolles'
import Sushi from '../pages/Sushi'
import Sets from '../pages/Sets'
import Snacks from '../pages/Snacks'
import Drinks from '../pages/Drinks'
import Sauce from '../pages/Sauce'
import NotFoundPage from '../pages/NotFoundPage'

const routeConfig = [
  {
    path: '/',
    element: Main,
  },
  {
    path: '/rolles',
    element: Rolles,
  },
  {
    path: '/sushi',
    element: Sushi,
  },
  {
    path: '/sets',
    element: Sets,
  },
  {
    path: '/snacks',
    element: Snacks,
  },
  {
    path: '/drinks',
    element: Drinks,
  },
  {
    path: '/sauce',
    element: Sauce,
  },
  {
    path: '*',
    element: NotFoundPage,
  },
]

export default routeConfig
