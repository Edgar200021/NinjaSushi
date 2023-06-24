import ProductItem from '../ProductItem'

import emptyImg from '../../assets/img/emptyproducts.jpg'

import styles from './ProductsList.module.sass'

const ProductsList = ({ data, category = '' }) => {
  const elem = category
    ? data
        .filter(item => item.category === category)
        .map(item => {
          return <ProductItem key={item.id} {...item} />
        })
    : data.map(item => {
        return <ProductItem key={item.id} {...item} />
      })

  const content = data.length ? (
    <ul className={styles.productlist}>{elem}</ul>
  ) : (
    <>
      <span className={styles.productlist__span}>Товары отсуствуют</span>
	  <img className='empty-product' src={emptyImg} alt='пустая коробка'/>
    </>
  )

  return content
}

export default ProductsList
