import React, {  } from "react";
import styles from './TextInput.module.css';


const TextInput = ({onChange,value}) => {

  return (
    <div>
      <input
        type="text"
        id="textInput"
        placeholder="Please enter a country name."
        value={value}
        className={styles.inputText}
        onChange={(e) => {onChange(e)}}
      />
    </div>
  );
};

export default TextInput;
