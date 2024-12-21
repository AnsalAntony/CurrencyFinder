import React, { useEffect,useState } from "react";
import ApiService from "@/api/ApiService";
import styles from './currencyFinder.module.css';
import TextInput from "../../components/TextInput/TextInput";
import ResultLabel from "../../components/ResultLabel/ResultLabel";
import ErrorText from "@/components/ErrorText/ErrorText";
import SubmitButton from "@/components/SubmitButton/SubmitButton";

const CurrencyFinder = () => {
  useEffect(() => {}, []);
  const [countryName, setCountryName] = useState("");
  const [currencyName, setCurrencyName] = useState("");
  const [errorText, setErrorText] = useState("");

  const geCurrency = () => {
    ApiService.getCurrency(countryName)
      .then((response) => {
        console.log("Currency Query Response:", response);
        if(response?.data?.item?.length == 0){
          setErrorText("No results found for your search. Please consider trying a different country name or double-check the spelling you entered")
          return
        }
        const item = response?.data?.item[0]
        const currency = item?.currency[0] 
        const currencyName = currency?.object?.nameEn
        setCurrencyName(currencyName)

      })
      .catch((error) => {
        setErrorText(error?.message ? error.message : 'An error occurred while fetching currency information. Please try again later.')
        console.error("Currency Query Error:", error);
      });
  };
  const validateInput = ()=>{
    if (countryName == "") {
      setErrorText("Please enter a countery name !")
      return;
    }
    geCurrency()
  }

  const capitalizeFirstLetter = (value) => {
    const valueStr = value.trim();
    return valueStr.charAt(0).toUpperCase() + valueStr.slice(1);
  };

  return (
    <div className={styles.container}>
     <div style={{maxWidth:600}}>
      <h1>Find a Currency by Country Name</h1>
      <p>
        We are dedicated to assisting you in identifying the official currency
        utilized in a specific country. Simply provide the country of interest,
        and we'll furnish you with the corresponding currency name
      </p>
      <TextInput
      value={countryName}
      onChange={(e) => {
        const capitalizedValue = capitalizeFirstLetter(e.target.value);
        setErrorText("")
        setCurrencyName("")
        setCountryName(capitalizedValue)
      }}
      />
      {errorText != "" && (
      <ErrorText
      errorText={errorText}
      />
      )}
      <ResultLabel
      currencyName ={currencyName}
      />
      <SubmitButton
      label="Submit"
      onClick={() => {
        setErrorText("")
        validateInput()
      }}
      />
      </div>

    </div>
  );
};

export default CurrencyFinder;
