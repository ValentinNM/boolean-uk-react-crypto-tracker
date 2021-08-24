import { useEffect, useState } from 'react'

import MainDetail from './components/MainDetail'
import SideListItem from './components/SideListItem'

import {CRIPTO_LIST} from './constants'

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCripto, setSelectedCripto] = useState(null)
  const [coins, setCoins] = useState([])
  useEffect(() => {
    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp')
    fetch(CRIPTO_LIST)
      .then(resp => resp.json())
      .then(coins => setCoins(coins))
  }, [])

  console.log('cryptoItem: ', coins)
  // CRIPTO_LIST

  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCripto(id) {
    return selectedCripto === id
  }

  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        <ul>
        { coins.map((coin) => { 
          console.log("coin: ", coin )
          return (

          <SideListItem 
          isSelectedCripto={isSelectedCripto}
          item={coin}
          />




          )

        })
          /* This is where the side list goes */
          // <SideListIte  = {isSelectedCripto} />
          // selectedCripto.map(coin =>
          // )
        }
        </ul>
      </aside>
      <main className="main-detail">
        {selectedCripto
          ? 'Create the main detail component here'
          : 'Select a coin bro!'}
        {/* News feed component needs to go here */}
      </main>
    </>
  )
}

export default App
