const address = [
  { type: 'text', placeholder: 'Город', value: 'city' },
  { type: 'text', placeholder: 'Улица', value: 'street' },
  { type: 'number', placeholder: 'Подьезд', value: 'entrance' },
  { type: 'number', placeholder: 'Этаж', value: 'floor' },
  { type: 'number', placeholder: 'Квартира', value: 'apartment' },
]

const inputAddress = [
	{type: 'radio', value: 'Киев', text: 'Киев'},
	{type: 'radio', value: 'Днепр', text: 'Днепр'},
	{type: 'radio', value: 'Харьков', text: 'Харьков'},
	{type: 'radio', value: 'Одесса', text: 'Одесса'},
]

export {address, inputAddress}
