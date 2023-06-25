import chili from '../assets/icons/chili.svg'
import lactose from '../assets/icons/lactose.svg'
import vegan from '../assets/icons/vegan.svg'

export const foodSubCategory = [
  'Классические',
  'Маки',
  'Драконы',
  'Запеченные',
  'Феликсы',
  'Сладкие',
]

export const drinksSubCategory = [
  'Натуральные',
  'Газированные',
  'Алкогольные',
  'Домашние',
]

export const productSort = [
  {
    value: 'expensiveToCheap',
    label: 'От дорогих к дешевым',
  },
  { value: 'cheapToExpensive', label: 'От дешевых к дорогым' },
]


export const foodProperties = [
  { value: 'Острые', img: chili },
  { value: 'Вегетарианские', img: vegan },
  { value: 'Безлактозные', img: lactose },
]


export const newsGenre = [
	{value: 'Обновления в меню'},
	{value: 'Музыка'}
]