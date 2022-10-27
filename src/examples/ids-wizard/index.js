import React from 'react';

const IdsWizard = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Wizard
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="4">
        <ids-layout-grid-cell col-span="2" id="ex-ids-wizard-parent-clickable">
          <ids-wizard step-number="3">
            <ids-wizard-step>Step One</ids-wizard-step>
            <ids-wizard-step>Step Two</ids-wizard-step>
            <ids-wizard-step>Step Three</ids-wizard-step>
            <ids-wizard-step>Step Four</ids-wizard-step>
          </ids-wizard>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsWizard;