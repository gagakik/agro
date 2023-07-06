

import React, {useEffect, useState} from 'react';

const Api = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://213.131.37.250:8889/user/', {
              headers: {
                'Content-Type': 'application/json',
                'Referer':'http://localhost:3000/',
              },
            });
            const userReg = await response.json();
            setData(userReg);
            console.log(userReg);
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
            <li key={item.id}>{item.id}, {item.participant}, {item.tel}</li>
          ))}
        </ul>
      </div>
    );
  };

export default Api;









