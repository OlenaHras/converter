import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import AppBar from '../AppBar/AppBar';
import ConverterInput from '../ConverterInput/ConverterInput';

import reverseSvg from '../../icons/reverse.svg';
import './App.css';

function App() {
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [currency1, setCurrency1] = useState('UAH');
  const [currency2, setCurrency2] = useState('UAH');
  const [listOfCurrents, setListOfCurrents] = useState({});

  useEffect(() => {
    axios
      .get(
        'https://api.apilayer.com/exchangerates_data/latest?base=UAH&apikey=81I8Eqi9YZBkrMtF61fXZ773KRvm7wzc'
      )
      .then(response => {
        setListOfCurrents(response.data.rates);
        console.log(response.data.rates);
      });
  }, []);

  const handleAmountChange1 = amount1 => {
    setAmount2(
      (
        (amount1 * listOfCurrents[currency2]) /
        listOfCurrents[currency1]
      ).toFixed(2)
    );
    setAmount1(amount1);
  };

  const handleCurrencyChange1 = currency1 => {
    setAmount1(
      (
        (amount2 * listOfCurrents[currency1]) /
        listOfCurrents[currency2]
      ).toFixed(2)
    );
    setCurrency1(currency1);
  };
  const handleAmountChange2 = amount2 => {
    setAmount1(
      (
        (amount2 * listOfCurrents[currency1]) /
        listOfCurrents[currency2]
      ).toFixed(2)
    );
    setAmount2(amount2);
  };

  const handleCurrencyChange2 = currency2 => {
    setAmount2(
      (
        (amount1 * listOfCurrents[currency2]) /
        listOfCurrents[currency1]
      ).toFixed(2)
    );
    setCurrency2(currency2);
  };

  const handleToggleBtn = () => {
    setCurrency1(currency2);
    setCurrency2(currency1);
    handleAmountChange1(amount1);
    handleAmountChange2(amount2);
  };

  return (
    <div className="App">
      <AppBar currens={listOfCurrents} />
      <ConverterInput
        amount={amount1}
        currency={currency1}
        handleAmountChange={handleAmountChange1}
        handleCurrencyChange={handleCurrencyChange1}
      />
      <Button type="button" onClick={handleToggleBtn} variant="outlined">
        <img src={reverseSvg} alt="reverse" />
      </Button>
      <ConverterInput
        amount={amount2}
        currency={currency2}
        handleAmountChange={handleAmountChange2}
        handleCurrencyChange={handleCurrencyChange2}
      />
    </div>
  );
}

export default App;
