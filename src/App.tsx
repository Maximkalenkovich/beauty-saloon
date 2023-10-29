import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Slogan } from './layout/section/slogan/Slogan';
import { Service } from './layout/section/service/Service';
import { Partners } from './components/partners/Partners';

function App() {
  return (
    <div className="App">
     <Header />
     <Main />
     <Slogan />
     <Service />
     <Partners />

    </div>
  );
}

export default App;
