import React from 'react';

const Coba = () => {

    const setData = async () => {
      const response = await fetch('assets/data/items-single.json');
      const data = await response.json()
      console.log("Ini data",data)
      document.querySelector('ids-pie-chart').data = data;
      };
      setData();
  return (
    <ids-pie-chart title="A pie chart showing component usage" id="index-example" suppress-tooltips="true"></ids-pie-chart>
  );
};

export default Coba;
