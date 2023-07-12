import './api.css';
import App from '../App';
import Animation from '../components/animation';
import React, { useEffect, useState } from 'react';

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://213.131.37.250:8889/user/', {
        headers: {
          'Content-Type': 'application/json',
          Referer: 'http://localhost:3000/',
        },
      });
      const userReg = await response.json();
      setData(userReg);
    } catch (err) {
      console.error(err);
    }
  };

  const [details, setDetails] = useState({});
  const [editMode, setEditMode] = useState(false);

  const handleToggle = () => {
    setDetails({});
    setEditMode(false);
  };

  const handleEdit = (item) => {
    setDetails(item);
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://213.131.37.250:8889/user/${details.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Referer: 'http://localhost:3000/',
          },
          body: JSON.stringify(details),
        }
      );
      if (response.ok) {
        setEditMode(false);
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://213.131.37.250:8889/user/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Referer: 'http://localhost:3000/',
          },
        }
      );
      if (response.ok) {
        fetchData();
        // Show alert pop-up window
      window.alert(<div><h1>test</h1></div>)
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="info">
        <App />
        <h2>კომპანიების ჩამონათვალი</h2>
        <Animation>
          <ul>
            {data.map((item) => (
              <div className="detals" key={item.id}>
                <li className="fetchData">
                  <div className="segment">
                    <h4>Participant:</h4>
                    {!editMode && (
                      <a href={`/user/${item.id}`}>{item.participant}</a>
                    )}
                    {editMode && item.id === details.id && (
                      <input
                        type="text"
                        name="participant"
                        value={details.participant}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                  <div className="segment">
                    <h4>Email:</h4>
                    {!editMode && <p>{item.mail}</p>}
                    {editMode && item.id === details.id && (
                      <input
                        type="text"
                        name="mail"
                        value={details.mail}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                  <div className="segment">
                    <h4>Mobile Phone:</h4>
                    {!editMode && <p>{item.mob}</p>}
                    {editMode && item.id === details.id && (
                      <input
                        type="text"
                        name="mob"
                        value={details.mob}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                  <div className="segment">
                    <h4>Contact Person:</h4>
                    {!editMode && <p>{item.contact_person}</p>}
                    {editMode && item.id === details.id && (
                      <input
                        type="text"
                        name="contact_person"
                        value={details.contact_person}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                  
                    <div className="slide">
                    {!editMode && (
                    <button onClick={() => handleEdit(item)} className="btn">
                      Edit
                    </button>
                  )}
                      <input
                        type="submit"
                        name="save"
                        value="Save"
                        className="btn"
                        onClick={() => {
                          handleSave(item.id);
                          handleToggle(item.id);
                          }}
                      />
                      <input
                        type="submit"
                        name="delete"
                        value="Delete"
                        className="btn delete"
                        onClick={() => {
                          handleDelete(item.id);
                          handleToggle(item.id);
                        }}
                      />
                    </div>
                </li>
              </div>
            ))}
          </ul>
        </Animation>
        {data.length > 0 && <p>Total Participants: {data.length}</p>}
      </div>
    </div>
  );
};

export default Api;