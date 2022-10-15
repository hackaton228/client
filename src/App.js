import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './styles/styles.scss'
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <Provider store={store}>
     <Header/>
      <AppRouter />
     <Footer/>
    </Provider>
  );
}

export default App;
