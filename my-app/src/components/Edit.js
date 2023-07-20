import React, { useEffect, useState } from 'react';
import App from '../App';
import Animation from '../components/animation';
import axios from 'axios';
import './edit.css'

const Edit = () => {
  const [data, setData] = useState([]);
  const [editedItem, setEditedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://10.168.133.11:8000/user/');
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://10.168.133.11:8000/user/${id}/`);
      fetchData();
      alert('წარმატებით წაიშალა');
    } catch (err) {
      console.error(err);
    }
  };

  const editUser = (item) => {
    setEditedItem(item);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedItem = {
      participant: formData.get('participant'),
      address1: formData.get('address1'),
      address2: formData.get('address2'),
      tel: formData.get('tel'),
      mob: formData.get('mob'),
      mail: formData.get('mail'),
      exhibition: formData.get('exhibition'),
      contact_person: formData.get('contact_person'),
      price: formData.get('price'),
      payed: formData.get('payed'),
      status: formData.get('status'),
      employer: formData.get('employer'),
      date: formData.get('date'),
      logo: formData.get('logo'),
      file: formData.get('file'),
      // Update with other properties as needed
    };

    try {
      await axios.put(`http://10.168.133.11:8000/user/${editedItem.id}/`, updatedItem, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      fetchData();
      setEditedItem(null); // Clear editedItem state after successful update
      alert('წარმატებით შეიცვალა');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <App />
      <div className="info">
        <h2>კომპანიების ჩამონათვალი</h2>
        {data.length > 0 && <p className="length">მონაწილეების რაოდენობა: {data.length}</p>}
        <Animation>
          <ul className='uldetal'>
            {data.map((item) => (
              <div className="details" key={item.id}>
                {editedItem && editedItem.id === item.id ? (
                    <form onSubmit={handleFormSubmit} className='form'>
                    <input type="text" name="participant" placeholder="მონაწილე" defaultValue={item.participant} />
                    <input type="text" name="address1" placeholder="იურიდიული მის." defaultValue={item.address1} />
                    <input type="text" name="address2" defaultValue={item.address2} />
                    <input type="tel" name="tel" defaultValue={item.tel} />
                    <input type="tel" name="mob" defaultValue={item.mob} />
                    <input type="email" name="mail" defaultValue={item.mail} />
                    <input type="text" name="exhibition" defaultValue={item.exhibition} />
                    <input type="text" name="contact_person" defaultValue={item.contact_person} />
                    <input type="text" name="price" defaultValue={item.price} />
                    <input type="text" name="payed" defaultValue={item.payed} />
                    <input type="radio" name="status" defaultValue={item.status} />
                    <input type="text" name="employer" defaultValue={item.employer} />
                    <input type="date" name="date" defaultValue={item.date} />
                    <button type="submit" value="Submit">Save</button>
                  </form>
                ) : (
                    <li className="fetchData">
                    <div className='row-0'>
                    <p>მონაწილე: {item.participant}</p>
                    </div>
                    <div className='row-1'>
                    <p>იურიდიული მის.: {item.address1}</p>
                    <p>ფაქტიური მის.: {item.address2}</p>
                    <p>ტელეფონი: {item.tel}</p>
                    <p>მობილური: {item.mob}</p>
                    <p>ელ.ფოსტა: {item.mail}</p>
                    <p>გამოფენა: {item.exhibition}</p>
                    </div>
                    <div className='row-2'>
                    <p>საკონტაქტო პირი: {item.contact_person}</p>
                    <p>მთლიანი ღირებულება: {item.price} ლარი</p>
                    <p>გადახდილი: {item.payed} ლარი</p>
                    <p>სტატუსი: {item.status}</p>
                    <p>დაარეგისტრირა: {item.employer}</p>
                    <p>თარიღი: {item.date}</p>
                    <p>ლოგო: {item.logo}</p>
                    <p>ფაილი: {item.file}</p>
                    </div>
                    <div className='btns'>
                    <button onClick={() => editUser(item)}>Edit</button>
                    <button onClick={() => deleteUser(item.id)} className='red'>Delete</button>
                    </div>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </Animation>
      </div>
    </div>
  );
};

export default Edit;
