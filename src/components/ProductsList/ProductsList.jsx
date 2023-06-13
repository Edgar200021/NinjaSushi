import ProductItem from '../ProductItem'

import styles from './ProductsList.module.sass'

const ProductsList = () => {
	return (
		<ul className={styles.productlist}>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
			<ProductItem/>
		</ul>
	)
}

export default ProductsList

