import Main from '../pages/Main'
import Rolles from '../pages/Rolles'
import NotFoundPage from '../pages/NotFoundPage'

const routeConfig = [
  {
    path: '/',
    element: Main,
  },
  {
	path: '/rolles',
	element: Rolles
  },
  {
	path: '*',
	element: NotFoundPage
  }
]

export default routeConfig
