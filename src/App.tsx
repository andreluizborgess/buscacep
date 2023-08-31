import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import BuscaCep from './components/BuscaCepForm';
import styles from "./app.module.css"

function App() {
  return (
    <div>
    <Header />  
    <main className={styles.main}>
      <BuscaCep />
    </main>
    <Footer />  

    </div>
  );
}

export default App;
