import PropTypes from 'prop-types'

import styles from './Select.module.sass'

const Select = ({sortByPrice, defaultValue, sort }) => {
  return (
    <select onChange={sortByPrice} className={styles.select}>
      <option value="" >
        {defaultValue}
      </option>
      {sort.map(val => (
        <option key={val.value} value={val.value} className={styles.select__option}>
          {val.name}
        </option>
      ))}
    </select>
  )
}

Select.propTypes = {
  text: PropTypes.string,
}

export default Select
