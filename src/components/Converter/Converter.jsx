import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

const Converter = ({ usd, eur }) => {
  //   const [inputValue, setInputValue] = useState('');
  //   const [resultValue, setResultValue] = useState('');
  //   const [selectValue, setSelectValue] = useState(null);
  //   const [exchangeValue, setExchangeValue] = useState(null);
  const [firstInput, setFirstInput] = useState({ value: '', select: 1 });
  const [secondInput, setSecondInput] = useState({ value: '', select: 1 });
  //   const currentUSD = useSelector(state => state.USD);
  //   const currentEUR = useSelector(state => state.EUR);

  //   useEffect(() => {
  //     setSecondInput(state => {
  //       return {
  //         ...state,
  //         value: (firstInput.value * firstInput.select).toFixed(2),
  //       };
  //     });
  //     console.log(firstInput);
  //   switch (firstInput.select) {
  //     case 'UAH':
  //       break;
  //     default:
  //       break;
  //   }
  // if (firstInput.select === 'UAH' && secondInput.select === 'UAH') {
  //   setSecondInput(state => {
  //     return { ...state, value: firstInput.value };
  //   });
  // } else if (firstInput.select === 'USD') {
  //   setSecondInput(state => {
  //     return { ...state, value: firstInput.value };
  //   });
  // }
  //   }, [firstInput]);
  useEffect(() => {
    setFirstInput(state => {
      return {
        ...state,
        value: (secondInput.value * secondInput.select).toFixed(2),
      };
    });
    console.log(secondInput);
  }, [secondInput]);
  //   useEffect(() => {
  //     // if (usd.rate) {
  //     //   console.log(usd.rate * inputValue);
  //     // }
  //     //     // setResultValue(+inputValue * usd); //потрібно помножити на exchangeValue
  //   }, [inputValue, resultValue, selectValue, exchangeValue, usd]);

  //   const handleChange = e => {
  //     switch (e.target.name) {
  //       case 'inputValue':
  //         return setInputValue(e.target.value);
  //       case 'resultValue':
  //         return setResultValue(e.target.value);
  //       case 'selectValue':
  //         return setSelectValue(e.target.value);
  //       case 'exchangeValue':
  //         return setExchangeValue(e.target.value);
  //       default:
  //         break;
  //     }
  //   };

  //   useEffect(() => {
  //     if (!usd) {
  //       return;
  //     }
  //     setResultValue((inputValue / usd.rate).toFixed(2));
  //   }, [inputValue]);

  return (
    usd && (
      <div>
        <h2>Конвертер валют</h2>
        <form>
          <label htmlFor="inputValue"></label>
          <input
            type="number"
            name="inputValue"
            value={firstInput.value}
            onChange={e =>
              setFirstInput(state => {
                return { ...state, value: e.target.value };
              })
            }
            //   value={inputValue}
            //   onChange={handleChange}
            //   onChange={e => {
            //     // console.log(e.target.name);
            //     setInputValue(e.target.value);
            //   }}
            placeholder="0"
          />
          <label htmlFor="selectValue"></label>
          <select
            required
            className="form-select"
            id="selectValue"
            name="selectValue"
            value={firstInput.select}
            onChange={e =>
              setFirstInput(state => {
                console.log(e.target.value);
                return { ...state, select: e.target.value };
              })
            }
            // value={selectValue}
            //   onChange={e => setSelectValue(e.target.value)}
          >
            <option value={1}>UAH</option>
            <option value={usd.rate}>USD</option>
            <option value={eur.rate}>EUR</option>
          </select>

          <label htmlFor="resultValue"></label>
          <input
            type="number"
            name="resultValue"
            value={secondInput.value}
            onChange={e =>
              setSecondInput(state => {
                return { ...state, value: e.target.value };
              })
            }
            //   value={resultValue}
            //   onChange={e => setResultValue(e.target.value)}
            //   onChange={handleChange}
            placeholder="0"
          />
          <label htmlFor="exchangeValue"></label>
          <select
            required
            className="form-select"
            id="exchangeValue"
            name="exchangeValue"
            value={secondInput.select}
            onChange={e =>
              setSecondInput(state => {
                return { ...state, select: e.target.value };
              })
            }
            //   onChange={e => setExchangeValue(e.target.value)}
            //   onChange={handleChange}
          >
            <option value={1}>UAH</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </form>
      </div>
    )
  );
};

export default Converter;
