import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import AppBar from '../AppBar/AppBar';
import Converter from '../Converter/Converter';

import reverseSvg from '../../icons/reverse.svg';
import './App.css';

function App() {
  const [firstAmount, setFirstAmount] = useState('');
  const [secondAmount, setSecondAmount] = useState('');
  const [firstCurrency, setFirstCurrency] = useState('UAH');
  const [secondCurrency, setSecondCurrency] = useState('UAH');
  const [listOfCurrents, setListOfCurrents] = useState({});

  useEffect(() => {
    axios
      .get(
        'https://api.apilayer.com/exchangerates_data/latest?base=UAH&apikey=81I8Eqi9YZBkrMtF61fXZ773KRvm7wzc'
      )
      .then(response => {
        setListOfCurrents(response.data.rates);
      });
  }, []);

  const handleFirstAmountChange = firstAmount => {
    setSecondAmount(
      (
        (firstAmount * listOfCurrents[secondCurrency]) /
        listOfCurrents[firstCurrency]
      ).toFixed(2)
    );
    setFirstAmount(firstAmount);
  };

  const handleFirstCurrencyChange = firstCurrency => {
    setFirstAmount(
      (
        (secondAmount * listOfCurrents[firstCurrency]) /
        listOfCurrents[secondCurrency]
      ).toFixed(2)
    );
    setFirstCurrency(firstCurrency);
  };
  const handleSecondAmountChange = secondAmount => {
    setFirstAmount(
      (
        (secondAmount * listOfCurrents[firstCurrency]) /
        listOfCurrents[secondCurrency]
      ).toFixed(2)
    );
    setSecondAmount(secondAmount);
  };

  const handleSecondCurrencyChange = secondCurrency => {
    setSecondAmount(
      (
        (firstAmount * listOfCurrents[secondCurrency]) /
        listOfCurrents[firstCurrency]
      ).toFixed(2)
    );
    setSecondCurrency(secondCurrency);
  };

  const handleToggleBtn = () => {
    setFirstCurrency(secondCurrency);
    setSecondCurrency(firstCurrency);
    handleFirstAmountChange(secondAmount);
    handleSecondCurrencyChange(firstCurrency);
  };

  return (
    <div className="App">
      <AppBar currens={listOfCurrents} />
      <Converter
        amount={firstAmount}
        currency={firstCurrency}
        handleAmountChange={handleFirstAmountChange}
        handleCurrencyChange={handleFirstCurrencyChange}
      />
      <Button type="button" onClick={handleToggleBtn} variant="outlined">
        <img src={reverseSvg} alt="reverse" />
      </Button>
      <Converter
        amount={secondAmount}
        currency={secondCurrency}
        handleAmountChange={handleSecondAmountChange}
        handleCurrencyChange={handleSecondCurrencyChange}
      />
    </div>
  );
}

export default App;
