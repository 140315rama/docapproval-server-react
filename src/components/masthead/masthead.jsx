import React from 'react';

const Masthead = () => {
  return (
    <>
        <ids-masthead>
          <ids-toolbar class="masthead">
            <ids-toolbar-section type="title">
              <ids-text>
                <h1 class="masthead-appname">
                  Busana Apparel Group
                </h1>
              </ids-text>
            </ids-toolbar-section>
            <ids-toolbar-section type="buttonset" align="end">
            </ids-toolbar-section>
          </ids-toolbar>
        </ids-masthead>
    </>
  );
};

export default Masthead;
