import React from 'react';
import 'tailwindcss/tailwind.css';
/* import Checkout from './components/Checkout'; */
import ViewBox from './components/ViewBox';

const App: React.FC = () => {
  return (
    <>
      {/*        <Banner /> */}

      <ViewBox />
      <div className='stars -z-10'></div>
    </>
  );
};

export default App;