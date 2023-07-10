import './list.css'

import React from 'react';

const List = (props) => {
    return (
        <div className='container'>
        <div className='search'>
        <label for="gsearch">Search Participants:</label>
        <input type="psearch" id="psearch" name="psearch"/>
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
            <button className='detals'>Detals</button>
        </div>
        </div>
    );
}

export default List;
