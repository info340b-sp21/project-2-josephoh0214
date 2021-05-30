import React from 'react';
import { Header } from './Header';
import { ModifyData } from './ModifyData';
import { Footer } from './Footer';


function App(props) {
  const dataset = props.data.drinks;
  return (
    <div>
      <Header />
      <main>
      <ModifyData dataset={dataset}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
