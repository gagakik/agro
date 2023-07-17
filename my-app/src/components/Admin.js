import React, { useEffect, useState } from 'react';
import Animation from '../components/animation';
import './admin.css';

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
      await fetch(`http://10.168.133.11:8000/user/${id}`, {
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
      // Update with other properties as needed
    };
    try {
      await fetch(`http://10.168.133.11:8000/user/${editedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
      fetchData();
      setEditedItem(null);
      alert('წარმატებით შეიცვალა');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="adinfo">
        <h2>კომპანიების ჩამონათვალი</h2>
        {data.length > 0 && <p className="length">მონაწილეების რაოდენობა: {data.length}</p>}
        <Animation>
          <ul>
            {data.map((item) => (
              <div className="addetails" key={item.id}>
                {editedItem && editedItem.id === item.id ? (
                  <form onSubmit={handleFormSubmit}>
                    <input type="text" name="participant" defaultValue={item.participant} />
                    <input type="text" name="address1" defaultValue={item.address1} />
                    {/* Add additional input fields for other properties */}
                    <button type="submit">Save</button>
                  </form>
                ) : (
                  <li className="adfetchData">
                    <p>Participant: {item.participant}</p>
                    <p>Address 1: {item.address1}</p>
                    {/* Render other properties */}
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