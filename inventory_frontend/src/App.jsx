import React from 'react'
import styles from './style'

import Navbar from './components/Navbar';
import Home from './components/Home';
const App = () => (
    <div className="bg-blue-500 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}> 
          <Navbar/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}> 
          <Home/>
        </div>
      </div>
    </div>
);


export default App