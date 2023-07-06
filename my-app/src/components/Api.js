import './api.css'

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
      <div className='info'>
        <h1>ბაზიდან მიღებული სია</h1>
        <ul>
          {data.map((item) => (
            <li className='fetchData' key={item.id}><p>{item.id}</p> <a href='/item.id'>{item.participant}</a> <p>{item.tel}</p>
            <p>{item.mail}</p>
            <input type='submit' name='edit' value="EDIT" className='edit'/>
            <input type='submit' name='edit' value="SAVE" className='save'/>
            <input type='submit' name='edit' value="DELETE" className='delete'/>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Api;









