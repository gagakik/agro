import React, { useState } from 'react';
import { Form } from "react-router-dom";
import './cards.css'

const Cards = () => {
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
            alert(response.status)
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
            <Form method="post" action="/events">
            <div className='inputcard'>
            <div className="user">
            <input type='text' name='participant' required="required" className='inputData' value={formData.participant}
              >
            </input>
            <span>კომპანიის დასახება</span>
            </div>
            <div className="user">
            <input type='text' name='category' required="required" className='inputData' value={formData.category}
              >
            </input>
            <span>საქმიანობის სფერო</span>
            </div>
            <div className="user">
            <input type="email" id="email" name="email" required="required" className='inputData' value={formData.email}
              >
            </input>
            <span>ელექტრონული ფოსტა</span>
            </div>
            <div className="user">
            <input type="tel" pattern="[0-9]+" title="Please enter only numbers" required="required" className='inputData' value={formData.tel}
              >
            </input>
            <span>ტელეფონის ნომერი</span>
            </div>
            <div className="user">
            <input type="tel" pattern="[0-9]+" title="Please enter only numbers" required="required" className='inputData' value={formData.tel}
              >
            </input>
            <span>მობილური ტელეფონი</span>
            </div>
            <div className="user">
            <input type='text' name='address' required="required" className='inputData' value={formData.tel}>
            </input>
            <span>ფაქტობრივი მისამართი</span>
            </div>
            <div className="user">
            <input type='text' name='address' required="required" className='inputData' value={formData.tel}
              >
            </input>
            <span>იურიდიული მისამართი</span>
            </div>
            <div className="user">
            <input type='text' name='contact_person' required="required"className='inputData' value={formData.tel}
              >
            </input>
            <span>საკონტაკტო პირი</span>
            </div>
            <div className="user">
            <input type='text' name='web' required="required" className='inputData' value={formData.tel}
              >
            </input>
            <span>სოციალური ან ვებსაიტი</span>
            </div>
            <div className="user">
            <input type='text' name='text' required="required" className='inputData' value={formData.tel}
              >
            </input>
            <span>დამატებითი ინფორმაცია</span>
            </div>
            <input type="file"  className='inputFile' id='uploadBtn1'>
            </input>
            <label className='customFileInput' for="uploadBtn1">ლოგოს ატვირთვა</label>
            <input type="file"  className='inputFile' id='uploadBtn2' value={formData.tel}/>
            <label className='customFileInput' for="uploadBtn2">ფაილის ატვირთვა</label>
            </div>
            <input type='submit' className='submit' value="გაგზავნა" onChange={handleSubmit}/>
            </Form>
        </div>
    );
}

export default Cards;








