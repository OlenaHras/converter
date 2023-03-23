const AppBar = ({ currens }) => {
  let currentDate = new Date().toJSON().slice(0, 10);

  return (
    <div>
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
            <td>EUR</td>
            <td>{currens.EUR}</td>
          </tr>
          <tr>
            <td>USD</td>
            <td>{currens.USD}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppBar;
