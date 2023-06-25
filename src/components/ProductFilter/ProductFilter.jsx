import PropTypes from 'prop-types'
import Select from 'react-select'

import Input from '../Input'

import { productSort } from '../../constants/category'

import styles from './ProductFilter.module.sass'

const ProductFilter = ({
  properties,
  subCategory,
  filterByProperty,
  sortByPrice,
  defaultValue,
  onInput,
}) => {
  return (
    <div className={styles.productfilter}>
      <div className={styles.productfilter__subcategory}>
        <div className={styles.productfilter__subcategory_left}>
          <Input
            name={'input-field'}
            type="radio"
            text="Все"
            value=""
            onChange={e => onInput(e.target.value)}
          ></Input>
          {subCategory?.map(category => (
            <Input
              name={'input-field'}
              key={category}
              onChange={e => onInput(e.target.value)}
              type="radio"
              text={category}
              value={category}
            />
          ))}
        </div>
        <div className={styles.productfilter__subcategory_right}>
          <Select
            className={styles.react_select_container}
            classNamePrefix={styles.react_select}
			onChange={({value}) => sortByPrice(value)}
            options={productSort}
          />
        </div>
      </div>
      <div className={styles.productfilter__properties}>
        {properties?.map(({ value, img }) => (
          <Input
            onChange={e => filterByProperty(e.target.value)}
            key={value}
            value={value}
            text={value}
            type="checkbox"
          >
            <img
              style={{ width: '20px', height: '20px' }}
              src={img}
              alt={value}
            />
          </Input>
        ))}
      </div>
    </div>
  )
}

ProductFilter.propTypes = {
  text: PropTypes.string,
}

export default ProductFilter
