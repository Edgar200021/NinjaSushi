import { useSelector } from 'react-redux'
import { useState, useMemom, useEffect } from 'react'

import FormOrder from '../../components/FormOrder'

import styles from './PlaceAnOrder.module.sass'


const PlaceAnOrder = () => {
	return (
		<main className={styles.main}>
			<h2 className='second-title'>Оформление заказа</h2>
			<div className={styles.main__container}>
				<FormOrder/>
			</div>
		</main>
	)
}


export default PlaceAnOrder

