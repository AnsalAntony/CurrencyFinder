import React from "react";
import styles from "./ErrorText.module.css";

const ErrorText = ({ errorText }) => {
  return (
    <div>
      <p className={styles.errorText}>{errorText}</p>
    </div>
  );
};

export default ErrorText;
