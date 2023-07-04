import React from 'react';
import './cards.css'

const Cards = (props) => {

/**ტელეფონის ნომერი ორის შეტანა რომ შეიძლებოდეს
 * გადასაკეთებელია ფაილების ატვირთვის ღილაკი
 * პოპაფის ფანჯარა სადაც წარმატებას ან უარყოფის სტატუს უჩვენებს
 * 
 */

    return (
        <div className='card'>
            <div className='title'><h3>სარეგისტრაციო ფორმა</h3>
            <p>აგრონომიული გამოფენა</p>
            </div>
            <form>
            <div className='inputcard'>
            <div className="user">
            <input type='text' name='participant' required="required" className='inputData'>
            </input>
            <span>კომპანიის დასახება</span>
            </div>
            <div className="user">
            <input type='text' name='category' required="required" className='inputData'>
            </input>
            <span>საქმიანობის სფერო</span>
            </div>
            <div className="user">
            <input type="email" id="email" name="email" required="required" className='inputData'>
            </input>
            <span>ელექტრონული ფოსტა</span>
            </div>
            <div className="user">
            <input type="tel" pattern="[0-9]+" title="Please enter only numbers" required="required" className='inputData'>
            </input>
            <span>ტელეფონის ნომერი</span>
            </div>
            <div className="user">
            <input type="tel" pattern="[0-9]+" title="Please enter only numbers" required="required" className='inputData'>
            </input>
            <span>მობილური ტელეფონი</span>
            </div>
            <div className="user">
            <input type='text' name='address' required="required" className='inputData'>
            </input>
            <span>ფაქტობრივი მისამართი</span>
            </div>
            <div className="user">
            <input type='text' name='address' required="required" className='inputData'>
            </input>
            <span>იურიდიული მისამართი</span>
            </div>
            <div className="user">
            <input type='text' name='contact_person' required="required"className='inputData'>
            </input>
            <span>საკონტაკტო პირი</span>
            </div>
            <div className="user">
            <input type='text' name='web' required="required" className='inputData'>
            </input>
            <span>სოციალური ან ვებსაიტი</span>
            </div>
            <div className="user">
            <input type='text' name='text' required="required" className='inputData'>
            </input>
            <span>დამატებითი ინფორმაცია</span>
            </div>
            <input type="file"  className='inputFile' id='uploadBtn1'>
            </input>
            <label className='customFileInput' for="uploadBtn1">ლოგოს ატვირთვა</label>
            <input type="file"  className='inputFile' id='uploadBtn2'>
            </input>
            <label className='customFileInput' for="uploadBtn2">ფაილის ატვირთვა</label>
            </div>
            <input type='submit' className='submit' value="გაგზავნა"/>
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
