import './api.css';
import App from '../App';
import Animation from '../components/animation';
import React, { useEffect, useState } from 'react';
//http://213.131.37.250:8889/user/
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
          },
          body: JSON.stringify(details),
        }
      );
      if (response.ok) {
        fetchData();
        setEditMode(false);
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
        {data.length > 0 && <p className='lenght'>მონაწილეების რაოდენობა: {data.length}</p>}
        <Animation>
          <ul>
            {data.map((item) => (
              <div className="detals" key={item.id}>
                <li className="fetchData">
                  <div className="segment">
                    <h4>მონაწილე:</h4>
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
                    <h4>ელექტრონული ფოსტა:</h4>
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
                    <h4>მობილური:</h4>
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
                    <h4>საკონტაკტო პერსონა:</h4>
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
                  <div className="segment">
                    <h4>გამოფენა:</h4>
                    {!editMode && <p>{item.exhibition}</p>}
                    {editMode && item.id === details.id && (
                      <input
                        type="text"
                        name="contact_person"
                        value={details.exhibition}
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
      </div>
    </div>
  );
};

export default Api;