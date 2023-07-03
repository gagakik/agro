import React from 'react';
import './cards.css'

const Cards = (props) => {

    let cardarr = [ {id: 1, name: "კომპანიის დასახება"},
                    {id: 2, name: "საქმიანობის სფერო"},
                    {id: 3, name: "ელექტრონული ფოსტა"},
                    {id: 4, name: "ტელეფონის ნომერი"},
                    {id: 5, name: "გამოფენა"},
                    {id: 6, name: "მისამართი"},
                    {id: 7, name: "საკონტაკტო პირი"},
                    {id: 8, name: "კომპანიის ლოგო"},
                    {id: 9, name: "ფაილის ატვირთვა"},
                    {id: 10, name: "დამატებითი ინფორმაცია"},
                    {id: 11, name: "სოციალური ან ვებსაიტი"}
]


/**ტელეფონის ნომერი ორის შეტანა რომ შეიძლებოდეს
 * მისამართი იურიდიული და ფაქტიური
 * გამოფენა თავისით ეწეროს დეფაულთათ
 * გადასაკეთებელია ფაილების ატვირთვის ღილაკი
 * პოპაფის ფანჯარა სადაც წარმატებას ან უარყოფის სტატუს უჩვენებს
 * 
 */

    return (
        <div className='card'>
            <div className='title'><h1>{props.registr}</h1></div>
            <form>
            <div className='inputcard'>
            {cardarr.map((user) => (
            <div className="user">
            <input type='text' name='participant' required="required">
            </input>
            <span>{user.name}</span>
            </div>
                                    ))}
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
