import React, { useRef, useEffect, useState } from 'react';
import List from './list';
import History from './history';
const TabsContent = () => {
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
      <ids-tabs-context style={{marginTop:'0px'}}>
        <ids-tabs ref={tabsRef} style={{marginTop:'0px'}}>
          <ids-tab value="capex-pending">Pending</ids-tab>
          <ids-tab value="capex-approved">Approved</ids-tab>
          <ids-tab value="capex-rejected">Rejected</ids-tab>
          <ids-tab value="capex-history">History</ids-tab>
        </ids-tabs>
        <div className="ids-tabs-content">
          <ids-tab-content active={activeTab === 'capex-pending'}>
            <List />
          </ids-tab-content>
          <ids-tab-content active={activeTab === 'capex-approved'}>
          </ids-tab-content>
          <ids-tab-content active={activeTab === 'capex-rejected'}>
            <List />
          </ids-tab-content>
          <ids-tab-content active={activeTab === 'capex-history'}>
            <ids-layout-grid rows="1" gap="md" cols="1">
              <ids-layout-grid-cell>
                <ids-card>
                  <div slot="card-header">
                    <h2 class="card-title">Newest Documents In Progress</h2>
                  </div>
                  <div slot="card-content">
                    <History />
                  </div>
                </ids-card>
              </ids-layout-grid-cell>
            </ids-layout-grid>
          </ids-tab-content>
        </div>
      </ids-tabs-context>
    </>
  );
};

export default TabsContent;
