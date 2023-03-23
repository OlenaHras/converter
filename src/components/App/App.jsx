import { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '../AppBar/AppBar';
import Converter from '../Converter/Converter';
import ConverterInput from '../ConverterInput/ConverterInput';

import './App.css';

function App() {
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [currency1, setCurrency1] = useState('UAH');
  const [currency2, setCurrency2] = useState('UAH');
  const [listOfCurrents, setListOfCurrents] = useState({});

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json',
    }).then(({ data }) => {
      const usd = data.find(item => item.cc === 'USD');
      const eur = data.find(item => item.cc === 'EUR');
      setListOfCurrents({ UAH: 1, [usd.cc]: usd.rate, [eur.cc]: eur.rate });
    });
  }, []);

  const countAmound = amount1 => {
    setAmount1(amount1);
    setAmount2(
      (
        (amount1 * listOfCurrents[currency2]) /
        listOfCurrents[currency1]
      ).toFixed(2)
    );
  };
  // const handleListOfCurrents = () => {
  //   console.log(listOfCurrents);
  // };
  // handleListOfCurrents();

  return (
    <div className="App">
      <AppBar currens={listOfCurrents} />
      <ConverterInput
        amount={amount1}
        currency={currency1}
        // countAmound={countAmound}
        handleAmountChange={countAmound}
        handleCurrencyChange={setCurrency1}
      />
      <ConverterInput
        amount={amount2}
        currency={currency2}
        handleAmountChange={setAmount2}
        handleCurrencyChange={setCurrency2}
      />
    </div>
  );
}

export default App;
