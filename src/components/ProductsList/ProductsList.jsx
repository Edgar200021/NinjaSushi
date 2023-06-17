import ProductItem from '../ProductItem'

import styles from './ProductsList.module.sass'

const ProductsList = ({ data, category = ''}) => {
  const elem = category
    ? data
        .filter(item => item.category === category)
        .map(item => {
          return <ProductItem key={item.id} {...item} />
        })
    : data.map(item => {
        return <ProductItem key={item.id} {...item} />
      })

  return <ul className={styles.productlist}>{elem}</ul>
}

export default ProductsList
