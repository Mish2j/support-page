// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Button.module.css";

// import { ButtonProps } from "../../types";

const Button = ({ variant, type, icon, label, disabled, onClick }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={btnStyles}
      disabled={disabled}
    >
      {/* {icon && <FontAwesomeIcon icon={icon} />} */}
      {label && label}
    </button>
  );
};

export default Button;
