import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
        console.log('res.data');
      })
      .catch((error) => console.log('error!'));
  }, []);

  return (
    <div className='coin__app'>
      {/* search bar on the top */}
      <div className='coin__search'>
        <h1 className='coin__text'>Seach a currency</h1>
        <form>
          <input type='text' placeholder='Search' className='coin__input' />
        </form>
      </div>
    </div>
  );
}

export default App;
