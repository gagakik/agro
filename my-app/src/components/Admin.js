import React, { useEffect, useState } from 'react';
import Animation from '../components/animation';
import './admin.css';
import App from '../App';


//http://10.168.133.11:8000/user/

const Admin = () => {
  const [data, setData] = useState([]);
  const [editedItem, setEditedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://10.168.133.11:8000/user/');
      const userReg = await response.json();
      setData(userReg);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`http://10.168.133.11:8000/user/${id}/`, {
        method: 'DELETE',
      });
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
      participant: formData.get("participant"),
      address1: formData.get("address1"),
      address2: formData.get("address2"),
      tel: formData.get("tel"),
      mob: formData.get("mob"),
      mail: formData.get("mail"),
      exhibition: formData.get("exhibition"),
      contact_person: formData.get("contact_person"),
      price: formData.get("price"),
      payed: formData.get("payed"),
      status: formData.get("status"),
      employer: formData.get("employer"),
      date: formData.get("date"),
      logo: formData.get("logo"),
      file: formData.get("file"),
    };
    try {
      await fetch(`http://10.168.133.11:8000/user/${editedItem.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
      fetchData();
      setEditedItem();
      alert('წარმატებით შეიცვალა');
    } catch (err) {
      console.error(err);
      alert('წარმატებით შეიცვალა');
    }
  };

  // const confirmSubmit = (event) => {
  //   const confirmed = window.confirm('Are you sure you want to submit the form?');
  //   if (!confirmed) {
  //     event.preventDefault(); // Prevent form submission if not confirmed
  //   }
  // };

  return (
    <div className="container">
    <App/>
      <div className="info">
        <h2>კომპანიების ჩამონათვალი</h2>
        {data.length > 0 && <p className="length">მონაწილეების რაოდენობა: {data.length}</p>}
        <Animation>
          <ul>
            {data.map((item) => (
              <div className="details" key={item.id}>
                {editedItem && editedItem.id === item.id ? (
                  <form onSubmit={handleFormSubmit}>
                    <input type="text" name="participant" defaultValue={item.participant} />
                    <input type="text" name="address1" defaultValue={item.address1} />
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
                    <p>Participant: {item.participant}</p>
                    <p>Address 1: {item.address1}</p>
                    <p>Address 2: {item.address2}</p>
                    <p>tel: {item.tel}</p>
                    <p>mob: {item.mob}</p>
                    <p>mail: {item.mail}</p>
                    <p>exhibition: {item.exhibition}</p>
                    <p>contact_person: {item.contact_person}</p>
                    <p>price: {item.price}</p>
                    <p>payed: {item.payed}</p>
                    <p>status: {item.status}</p>
                    <p>employer: {item.employer}</p>
                    <p>date: {item.date}</p>
                    <p>logo: {item.logo}</p>
                    <p>file: {item.file}</p>
                    <button onClick={() => editUser(item)}>Edit</button>
                    <button onClick={() => deleteUser(item.id)}>Delete</button>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </Animation>
      </div>
    </div>
  );
}

export default Admin;