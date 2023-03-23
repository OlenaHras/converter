const ConverterInput = props => {
  return (
    <div>
      <input
        type="number"
        value={props.amount}
        placeholder="0"
        onChange={e => props.handleAmountChange(e.target.value)}
      />
      <select
        value={props.currency}
        onChange={e => props.handleCurrencyChange(e.target.value)}
      >
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};
export default ConverterInput;
