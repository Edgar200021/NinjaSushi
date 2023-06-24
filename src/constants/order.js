const orderDay = [
  { value: 'сегодня', label: 'Сегодня' },
  { value: 'завтра', label: 'Завтра' },
]

const orderTime = [
  { value: '12:00', label: '12:00' },
  { value: '13:00', label: '13:00' },
  { value: '14:00 ', label: '14:00 ' },
  { value: 'ближайшее', label: 'Ближайшее' },
  { value: '15:00 ', label: '15:00 ' },
  { value: '16:00', label: '16:00' },
  { value: '17:00 ', label: '17:00 ' },
]

const paymentMethods = [
  'Наличными курьеру',
  'Оплата терминалом курьеру',
  'Оплата картой online',
  'Оплата через BitPay',
]

export { orderDay, orderTime, paymentMethods }
