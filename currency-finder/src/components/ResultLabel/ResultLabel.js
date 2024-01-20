import React, {  } from "react";
import styles from './ResultLabel.module.css';

const ResultLabel = ({currencyName})=>{

    return(
        <div>
      <p className={styles.resultLable}>{currencyName}</p>
        </div>
    )
}
export default ResultLabel;