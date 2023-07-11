import React, { useState } from 'react';
import './cards.css'

const Registration = () => {
  const [formData, setFormData] = useState({
    participant: '',
    address1: '',
    address2: '',
    tel: '',
    mob: '',
    email: '',
    exhibition: 'agro', // Default value for exhibition
    contact_person: '',
    price: '',
    payed: '',
    status: false, // Default value for status (checkbox)
    employer: '',
    date: '', // Renamed "data" to "date" for consistency
    logo: null, // Changed the default value to null for file inputs
    file: null, // Changed the default value to null for file inputs
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to the server http://10.168.133.11:8000/user/
    fetch('http://10.168.133.11:8000/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        // Additional logic or state updates
      })
      .catch((error) => {
        alert('An error occurred while submitting the form.');
        console.error('Error:', error);
      });
  };

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    // Handle different input types appropriately
    const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>participant</label>
        <input type="text" name="participant" value={formData.participant} onChange={handleChange} />
        <label>address1</label>
        <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
        <label>address2</label>
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
        <label>tel</label>
        <input type="text" name="tel" value={formData.tel} onChange={handleChange} />
        <label>mob</label>
        <input type="text" name="mob" value={formData.mob} onChange={handleChange} />
        <label>email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>exhibition</label>
        <input type="text" name="exhibition" value={formData.exhibition} defaultValue={'agro'} onChange={handleChange} disabled/>
        <label>contact_person</label>
        <input type="text" name="contact_person" value={formData.contact_person} onChange={handleChange} />
        <label>price</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange} />
        <label>payed</label>
        <input type="text" name="payed" value={formData.payed} onChange={handleChange} />
        <label>status</label>
        <input type="checkbox" name="status" checked={formData.status} onChange={handleChange} />
        <label>employer</label>
        <input type="text" name="employer" value={formData.employer} defaultValue={'Gaga'} onChange={handleChange} disabled/>
        <label>date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <label>logo</label>
        <input type="file" name="logo" onChange={handleChange} />
        <label>file</label>
        <input type="file" name="file" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;