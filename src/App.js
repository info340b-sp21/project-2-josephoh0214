import React from 'react';
import { Header } from './Header';
import { MobileDropDownMenu } from './MoblieDropDownMenu';
import { ModifyData } from './ModifyData';
import { Footer } from './Footer';


function App(props) {
  const dataset = props.data.drinks;
  return (
    <div>
      <Header dataset={dataset}/>
      <main>
      <MobileDropDownMenu />
      <ModifyData dataset={dataset}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
