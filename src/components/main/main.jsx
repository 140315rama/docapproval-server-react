import React, { useRef, useEffect, useState } from 'react';
import Information from '../information/information';
import TabsContent from '../tabsContent/tabsContents';
// import TabsContent2 from './Information';
// import IdsTabsCapex from './ids-tabs-capex';

const Main = () => {
  const tabsRef = useRef();
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const tabs = tabsRef.current;

    // Initially add active tab to the state to show tab content on page load
    setActiveTab(tabs.value);

    // Event handler to be used in attach and cleanup event listener
    // Add active tab to the state to show tab content on tabs change
    const handleChange = () => setActiveTab(tabs.value);

    // Attach event listener
    tabs.addEventListener('change', handleChange);

    // Cleanup event listener on React component unmount
    return () => tabs.removeEventListener('change', handleChange);
  }, []);

  return (
    <>
      <ids-tabs-context>
        <ids-tabs ref={tabsRef}>
          <ids-tab value="information">Information</ids-tab>
          <ids-tab value="capex">CAPEX</ids-tab>
          <ids-tab value="mrf">MRF</ids-tab>
          <ids-tab value="others">Others</ids-tab>
        </ids-tabs>
        <div className="ids-tabs-content">
          <ids-tab-content active={activeTab === 'information'}>
            <div className="tab-content">
              <Information/>
            </div>
          </ids-tab-content>
          <ids-tab-content active={activeTab === 'capex'}>
            <div className="tab-content">  
              <TabsContent />     
            </div>
          </ids-tab-content>
          <ids-tab-content active={activeTab === 'mrf'}>
            <div className="tab-content">       
            </div>
          </ids-tab-content>
          <ids-tab-content active={activeTab === 'others'}>
            <div className="tab-content">       
            </div>
          </ids-tab-content>
        </div>
      </ids-tabs-context>
    </>
  );
};

export default Main;
