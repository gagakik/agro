import React, { useState } from 'react';
import './Registration.css'
import App from '../App';
import Animation from '../components/animation'

const Registration = () => {
  const [formData, setFormData] = useState({
    participant: '',
    address1: '',
    address2: '',
    tel: '',
    mob: '',
    mail: '',
    exhibition: 'agro', // Default value for exhibition
    contact_person: '',
    logo: null, // Changed the default value to null for file inputs
    file: null, // Changed the default value to null for file inputs
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to the server http://10.168.133.11:8000/user/
    fetch('http://213.131.37.250:8889/user/', {
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
        alert("წარმატებით დარეგისტრირდა");
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
    <App/>
    <Animation>
    <div className='reglist'>
      <form onSubmit={handleSubmit}>
        <label>მონაწილე</label>
        <input type="text" name="participant" value={formData.participant} onChange={handleChange} placeholder="Enter name"/>
        <label>იურიდიული მისმართი</label>
        <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
        <label>ფაქტიური მისამართი</label>
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
        <label>ტელეფონი</label>
        <input type="text" name="tel" value={formData.tel} onChange={handleChange} />
        <label>მობილური</label>
        <input type="text" name="mob" value={formData.mob} onChange={handleChange} />
        <label>ელექტრონული ფოსტა</label>
        <input type="email" name="mail" value={formData.mail} onChange={handleChange} />
        <label>გამოფენა</label>
        <input type="text" name="exhibition" value={formData.exhibition} defaultValue={'agro'} onChange={handleChange} disabled/>
        <label>საკონტაკტო პერსონა</label>
        <input type="text" name="contact_person" value={formData.contact_person} onChange={handleChange} />
        <label>კომპანიის ლოგო</label>
        <input type="file" name="logo" onChange={handleChange} />
        <label>დამატებითი ფაილი</label>
        <input type="file" name="file" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      </div>
      </Animation>
    </div>
  );
};

export default Registration;