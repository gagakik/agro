import React, { useState } from 'react';
import './list.css';

const List = (props) => {
  const [detal, setDetal] = useState(false);

  const handleToggle = () => {
    setDetal(!detal);
  };

  return (
    <div className='container'>
      <div className='search'>
        <label htmlFor="psearch">Search Participants:</label>
        <input type="text" id="psearch" name="psearch" />
      </div>
      <div className='company_wrap'>
      <div className='compList'>
        <div className='Participants'>
          <p className='num'>1</p>
          <p className='num'>ltd Participants</p>
        </div>
        <button onClick={handleToggle} className='edit'>
        {detal ? 'Detal Off' : 'Detal On'}</button>
        {detal && <div className='slide'>
          <input type='submit' name='edit' value="EDIT" className='edit'/>
          <input type='submit' name='edit' value="SAVE" className='save'/>
          <input type='submit' name='edit' value="DELETE" className='delete'/>
        </div>
        }
      </div>
      {detal && <div className='slide'>
          <p className='num'>Tel:</p>
          <p className='num'>email:</p>
          <p className='num'>Contact Person:</p>
        </div>
        }
    </div>
    </div>
  );
}

export default List;
