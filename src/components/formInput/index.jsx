import cx from "classnames";

import "./index.css";
import Text from "../text/index.jsx";

const FormInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  style,
  fullWidth = false,
  error,
}) => {
  const handleFormInputChange = (e) => {
    onChange(e, name);
  };

  return (
    <div
      className={cx("form-input__container", {
        ["form-input__container--full-width"]: fullWidth,
      })}
    >
      <input
        className={cx("form-input", {
          ["form-input--error"]: !!error,
        })}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleFormInputChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      {error && <Text color="red">{error}</Text>}
    </div>
  );
};

export default FormInput;
