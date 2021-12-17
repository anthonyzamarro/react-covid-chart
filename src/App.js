import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './API';

import styles from './App.module.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [dataObj, setDataObj] = useState();

  useEffect(async () => {
    const data = await fetchData();
    // console.log(data);
    if (data) {
      setDataObj(data);
      setLoading(false);
    }
  }, []);
  return (
    <div className={styles.container}>
      {
        loading ? <h1>Loading...</h1> :
          <>
            <Cards data={dataObj} />
            <CountryPicker />
            <Chart />
          </>
      }
    </div>
  );
}

export default App;
