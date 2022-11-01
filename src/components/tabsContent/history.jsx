import React, { useEffect, useRef } from 'react';

import { getGridColumns } from './historyColumn';

const History = () => {
  const dataGridRef = useRef();
  // TODO: Update grid data from the state
  // const [gridData, setGridData] = useState();

  useEffect(() => {
    async function fetchData() {
      // Do an ajax request
      const response = await fetch('assets/data/books.json');
      const data = await response.json()

      // Set columns
      dataGridRef.current.columns = getGridColumns(dataGridRef.current.formatters)

      // Set data
      dataGridRef.current.data = data
    }
    fetchData();
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-data-grid
            ref={dataGridRef}
            virtual-scroll="false"
            row-height="medium"
          ></ids-data-grid>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default History;
