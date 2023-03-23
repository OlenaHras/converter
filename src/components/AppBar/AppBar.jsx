import moment from 'moment/moment';
import { Container } from './AppBar.styled';

const AppBar = ({ currens }) => {
  let currentDate = moment().format('D/MM/YYYY');
  return (
    <Container>
      <h1>Курс валют на {currentDate}</h1>
      <table id="table">
        <thead>
          <tr>
            <td>Валюта</td>
            <td>Курс</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 EUR =</td>
            <td>{(currens.UAH / currens.EUR).toFixed(2)} UAH</td>
          </tr>
          <tr>
            <td>1 USD = </td>
            <td>{(currens.UAH / currens.USD).toFixed(2)} UAH</td>
          </tr>
          <tr>
            <td>1 PLN = </td>
            <td>{(currens.UAH / currens.PLN).toFixed(2)} UAH</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default AppBar;
