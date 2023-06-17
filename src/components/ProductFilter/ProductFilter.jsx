import PropTypes from 'prop-types'

import Input from '../Input'
import Select from '../Select'

import { foodSubCategory } from '../../constants/category'

import styles from './ProductFilter.module.sass'

const ProductFilter = ({sortByPrice, defaultValue, sort, onInput }) => {

  return (
    <div className={styles.productfilter}>
      <div className={styles.productfilter__subcategory}>
        <div className={styles.productfilter__subcategory_left}>
          <Input
            type="radio"
            text="Все"
            name="filter-input"
            value=""
            onChange={e => onInput(e.target.value)}
          ></Input>
          {foodSubCategory.map(category => (
            <Input
              key={category}
              onChange={e => onInput(e.target.value)}
              type="radio"
              text={category}
              value={category}
              name="filter-input"
            />
          ))}
        </div>
        <div className={styles.productfilter__subcategory_right}>
          <Select sortByPrice={(e) => sortByPrice(e.target.value)} sort={sort} defaultValue={defaultValue} />
        </div>
      </div>
    </div>
  )
}

ProductFilter.propTypes = {
  text: PropTypes.string,
}

export default ProductFilter
