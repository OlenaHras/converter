import { FormControl, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

import uahFlag from '../../icons/ua.svg';
import plnFlag from '../../icons/pl.svg';
import eurFlag from '../../icons/eu.svg';
import usdFlag from '../../icons/us.svg';

const Converter = props => {
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <TextField
          id="outlined-required"
          label={props.currency}
          type="number"
          value={props.amount}
          placeholder="0"
          onChange={e => props.handleAmountChange(e.target.value)}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-select-small"
          value={props.currency}
          onChange={e => props.handleCurrencyChange(e.target.value)}
        >
          <MenuItem value="UAH">
            <img src={uahFlag} alt="uah" /> UAH
          </MenuItem>
          <MenuItem value="USD">
            <img src={usdFlag} alt="usd" /> USD
          </MenuItem>
          <MenuItem value="EUR">
            <img src={eurFlag} alt="eur" /> EUR
          </MenuItem>
          <MenuItem value="PLN">
            <img src={plnFlag} alt="pln" /> PLN
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default Converter;
