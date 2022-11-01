import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './contents/Home/Index';
import 'ids-enterprise-wc/enterprise-wc'
import 'ids-enterprise-wc/components/ids-tabs/ids-tabs-context';
import 'ids-enterprise-wc/components/ids-tabs/ids-tab';
import 'ids-enterprise-wc/components/ids-tabs/ids-tab-content';
import 'ids-enterprise-wc/components/ids-tabs/ids-tab-divider';
import 'ids-enterprise-wc/components/ids-tabs/ids-tab-more';
import 'ids-enterprise-wc/components/ids-tabs/ids-tabs';
import 'ids-enterprise-wc/components/ids-pie-chart/ids-pie-chart';
import 'ids-enterprise-wc/components/ids-pie-chart/ids-pie-chart-base';
import Coba from './contents/Coba';
import Masthead from './components/masthead/masthead';

const App = () => {
  return (
    <Router>
      <Masthead/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Coba />} path="/coba" />
        </Routes>
    </Router>
  );
};

export default App;
