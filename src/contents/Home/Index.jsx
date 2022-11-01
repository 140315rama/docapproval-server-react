import React from 'react';
import './index.css';
import Masthead from '../../components/masthead/masthead';
import Hero from '../../components/hero/hero';
import Main from '../../components/main/main';
import BusanaSVG from '../../assets/svg/busana-svg';

const Home = () => {
  return (
  <ids-container style={{paddingTop:'38px'}}>
    <BusanaSVG />
    < Hero />
    < Main />
  </ids-container>
  );
};

export default Home;