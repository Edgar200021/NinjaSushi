import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './BasketItem.module.sass'



const BasketItem = ({className = ''}) => {
	return (
		<li className={cn(styles.basketitem, className)}>
			<img className={styles.basketitem__img} src="./img/roles/img-1.png" alt="" />
			<div className={styles.basketitem__info}>
				<h3 className={styles.basketitem__title}>Сет #1</h3>
				<span className={styles.basketitem__weight}>Вес: 40 г</span>
			</div>
			<div className={styles.basketitem__action}>
				<span className={styles.basketitem__price}>240 грн</span>
				<button data-plus className={styles.basketitem__btn}>-</button>
				<span className={styles.basketitem__quantity}>1</span>
				<button data-minus className={styles.basketitem__btn}>+</button>
			</div>
			<button className={styles.basketitem__delete_btn}>x</button>
		</li>
	)
}

BasketItem.propTypes = {
	className: PropTypes.string
}

export default BasketItem

