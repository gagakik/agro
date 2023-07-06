

import React, {useEffect, useState} from 'react';

const Api = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://10.168.133.11:8000/user/');
          const userReg = await response.json();
          setData(userReg);
          console.log(userReg)
        } catch (err) {
          console.error(err);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Data from Django:</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };

export default Api;









