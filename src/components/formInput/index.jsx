import cx from 'classnames'

import './index.css'


const FormInput = ({ type, name, value, onChange, placeholder, required, disabled, style, fullWidth = false }) => {

  const handleFormInputChange = (e) => {
    onChange(e, name)
  }

  return (
    <input
      className={cx('form-input', {['form-input--full-width']: fullWidth})}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={handleFormInputChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};

export default FormInput;
