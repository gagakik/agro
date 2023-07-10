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
      <div className='compList'>
        <div className='Participants'>
          <p className='num'>1</p>
          <p className='num'>ltd Participants</p>
        </div>
        <div className='contact'>
          <p className='num'>Tel:</p>
          <p className='num'>email:</p>
          <p className='num'>Contact Person:</p>
        </div>
        <button onClick={handleToggle}>{detal ? 'Turn Off' : 'Turn On'}</button>
       
      </div>
      {detal && <div className='slide'>test</div>}
    </div>
  );
}

export default List;
