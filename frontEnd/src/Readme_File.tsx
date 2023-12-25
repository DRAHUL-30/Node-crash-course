import React, { useEffect, useMemo, useState } from 'react';

const fetchData = async () => {
  try {
    // Simulating API call with a delay
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const processData = (data: any) => {
    console.log(data, "data")
  // Example processing logic, you can customize this based on your actual data structure
  if (!data) return 'No data available';

  return `Processed: ${data.title}`;
};

export const DemoCode = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndProcess = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    fetchDataAndProcess();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // With useMemo, processData will be recalculated only if the data changes
  const processedData = useMemo(() => processData(data), [data]);

  return <div>{processedData}</div>;
};

