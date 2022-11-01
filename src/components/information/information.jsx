import React from 'react';
import Donut from '../donut/donut';
import ListNewestDoc from '../listNewestDoc/listNewestDoc';

const Information= () => {  
    return (
    <><ids-layout-grid rows="1" gap="md" cols="4">
        <ids-layout-grid-cell>
          <ids-card style={{backgroundColor:'#fff'}}>
            <div slot="card-header">
              <h2 class="card-title">Total Documents</h2>
            </div>
            <div slot="card-content">
              <Donut/>
            </div>
          </ids-card>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell col-span="2">
          <ids-card>
            <div slot="card-header">
              <h2 class="card-title">All Documents Trafic</h2>
            </div>
            <div slot="card-content">
            </div>
          </ids-card>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-card>
            <div slot="card-header">
              <h2 class="card-title">Documents Status</h2>
            </div>
            <div slot="card-content">
            </div>
          </ids-card>
        </ids-layout-grid-cell>

      </ids-layout-grid>

      

      <ids-layout-grid rows="1" gap="md" cols="1">

        <ids-layout-grid-cell>
          <ids-card>
            <div slot="card-header">
              <h2 class="card-title">Newest Documents In Progress</h2>
            </div>
            <div slot="card-content">
              <ListNewestDoc />
            </div>
          </ids-card>
        </ids-layout-grid-cell>

      </ids-layout-grid>
      
    </>
    );
};

export default Information;
