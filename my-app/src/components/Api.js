import './api.css'

import React, {useEffect, useState} from 'react';

const Api = () => {
    const [data, setData] = useState([]);
//http://213.131.37.250:8889/user/
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://10.168.133.11:8000/user/', {
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

    const [detal, setDetal] = useState(false);

  const handleToggle = () => {
    setDetal(!detal);
  };
    
  
    return (
      <div className='info'>
        <h2>კომპანიების ჩამონათვალი</h2>
        <ul>
          {data.map((item) => (
            <li className='fetchData' key={item.id}><a href='/item.id'>{item.participant}</a> <p>{item.tel}</p>
            <p>{item.mail}</p><p>{item.mob}</p><p>{item.contact_person}</p>
            <button onClick={handleToggle} className='edit'>
            {detal ? 'Detal Off' : 'Detal On'}</button>
            {detal && <div className='slide'>
          <input type='submit' name='edit' value="EDIT" className='edit'/>
          <input type='submit' name='edit' value="SAVE" className='save'/>
          <input type='submit' name='edit' value="DELETE" className='delete'/>
        </div>
        }
          </li>
          ))}
        </ul>
      </div>
    );
  };

export default Api;









