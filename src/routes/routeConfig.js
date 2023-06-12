import Main from '../pages/Main'
import NotFoundPage from '../pages/NotFoundPage'

const routeConfig = [
  {
    path: '/',
    element: Main,
  },
  {
	path: '*',
	element: NotFoundPage
  }
]

export default routeConfig
