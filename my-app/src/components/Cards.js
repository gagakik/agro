import React, { useState } from 'react';
import './cards.css'

const Cards = (props) => {

    const [formData, setFormData] = useState({
        participant: '',
        category: '',
        email: '',
        telephone: '',
        mobile: '',
        address: '',
        juridical_address: '',
        contact_person: '',
        web: '',
        text: '',
      });

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://10.168.133.11:8000/user/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const jsonData = await response.json();
            console.log(jsonData); // Response data
          } else {
            console.error('Request failed with status:', response.status);
          }
        } catch (err) {
          console.error(err);
        }
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    return (
        <div className='card'>
            <div className='title'><h2>სარეგისტრაციო ფორმა</h2></div>
            <form onSubmit={handleSubmit}>
            <div className='inputcard'>
            <div className="user">
            <input type='text' name='participant' required="required" className='inputData' value={formData.participant}
              onChange={handleChange}>
            </input>
            <span>კომპანიის დასახება</span>
            </div>
            <div className="user">
            <input type='text' name='category' required="required" className='inputData' value={formData.category}
              onChange={handleChange}>
            </input>
            <span>საქმიანობის სფერო</span>
            </div>
            <div className="user">
            <input type="email" id="email" name="email" required="required" className='inputData' value={formData.email}
              onChange={handleChange}>
            </input>
            <span>ელექტრონული ფოსტა</span>
            </div>
            <div className="user">
            <input type="tel" pattern="[0-9]+" title="Please enter only numbers" required="required" className='inputData' value={formData.tel}
              onChange={handleChange}>
            </input>
            <span>ტელეფონის ნომერი</span>
            </div>
            <div className="user">
            <input type="tel" pattern="[0-9]+" title="Please enter only numbers" required="required" className='inputData' value={formData.tel}
              onChange={handleChange}>
            </input>
            <span>მობილური ტელეფონი</span>
            </div>
            <div className="user">
            <input type='text' name='address' required="required" className='inputData' value={formData.tel}
              onChange={handleChange}>
            </input>
            <span>ფაქტობრივი მისამართი</span>
            </div>
            <div className="user">
            <input type='text' name='address' required="required" className='inputData' value={formData.tel}
              onChange={handleChange}>
            </input>
            <span>იურიდიული მისამართი</span>
            </div>
            <div className="user">
            <input type='text' name='contact_person' required="required"className='inputData' value={formData.tel}
              onChange={handleChange}>
            </input>
            <span>საკონტაკტო პირი</span>
            </div>
            <div className="user">
            <input type='text' name='web' required="required" className='inputData' value={formData.tel}
              onChange={handleChange}>
            </input>
            <span>სოციალური ან ვებსაიტი</span>
            </div>
            <div className="user">
            <input type='text' name='text' required="required" className='inputData' value={formData.tel}
              onChange={handleChange}>
            </input>
            <span>დამატებითი ინფორმაცია</span>
            </div>
            <input type="file"  className='inputFile' id='uploadBtn1'>
            </input>
            <label className='customFileInput' for="uploadBtn1">ლოგოს ატვირთვა</label>
            <input type="file"  className='inputFile' id='uploadBtn2' value={formData.tel}
              onChange={handleChange}/>
            <label className='customFileInput' for="uploadBtn2">ფაილის ატვირთვა</label>
            </div>
            <input type='submit' className='submit' value="გაგზავნა" onChange={handleChange}/>
            </form>
        </div>
    );
}

export default Cards;








/*id INTEGER PIMERY KEY,
participant TEXT,
address TEXT,
tel TEXT NOT NULL,
mail TEXT NOT NULL,
exhibition,
contact_person,
logo BLOB,
file BLOB,
price REAL,
status INTEGER NOT NULL DEFAULT 0*/
