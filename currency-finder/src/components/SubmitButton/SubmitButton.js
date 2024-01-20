import React, {  } from "react";
import styles from './SubmitButton.module.css';

const SubmitButton = ({label, onClick})=>{

    return (
        <div className={styles.container}>
        <button className={styles.button} onClick={onClick}>
          {label}
        </button>
        </div>
      );
}
export default SubmitButton;
