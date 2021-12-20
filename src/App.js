import { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './API';

import styles from './App.module.css';

import covidImage from './images/image.png';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [dataObj, setDataObj] = useState();
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchData();
      if (data) {
        setDataObj(data);
        setLoading(false);
      }
    }
    fetchApi();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setCountry(country);
    setDataObj(data);
  }

  return (
    <div className={styles.container}>
      <img src={covidImage} alt='covid-19' className={styles.img} />
      {
        loading ? <h1>Loading...</h1> :
          <>
            <Cards data={dataObj} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart data={dataObj} country={country} />
          </>
      }
    </div>
  );
}

export default App;
