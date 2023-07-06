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
    exhibition: '',
    contact_person: '',
    price: '',
    payed: '',
    status: '',
    employer: '',
    data: '',
    logo: '',
    file: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to the server
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
        alert("ver gaigzavna")
        console.error('Error:', error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Your form fields go here */}
        <input type="text" name="participant" value={formData.participant} onChange={handleChange} />
        <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
        <input type="text" name="tel" value={formData.tel} onChange={handleChange} />
        <input type="text" name="mob" value={formData.mob} onChange={handleChange} />
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        <input type="text" name="exhibition" value='agro' onChange={handleChange} />
        <input type="text" name="contact_person" value={formData.contact_person} onChange={handleChange} />
        <input type="text" name="price" value={formData.price} onChange={handleChange} />
        <input type="text" name="payed" value={formData.payed} onChange={handleChange} />
        <input type="checkbox" name="status" value={formData.status} onChange={handleChange} />
        <input type="text" name="employer" value={formData.employer} onChange={handleChange} />
        <input type="date" name="data" value={formData.data} onChange={handleChange} />
        <input type="file" name="logo" value={formData.logo} onChange={handleChange} />
        <input type="file" name="file" value={formData.file} onChange={handleChange} />
        {/* Repeat the above line for each form field */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;