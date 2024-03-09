
import React, { useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState('InitialState');
  const [datetime,SetDatetime] = useState('InitialState');
  const [description,SetDescription] = useState('InitialState');
  function addNewTranscation(){

  }
  return (
    <main>
      <h1>₹4000<span>.00</span></h1>
      <form>
        <div className='basic'>
          <input type="text" value={name} onChange={ev => setName(ev.target.value)} placeholder="{+2000 LG fridge}" />
          <input value={datetime} onChange={ev => setName(ev.target.value)} type="datetime-local" />
        </div>
        <div className='description'>
          <input type="text" value={description} onChange={ev => setName(ev.target.value)} placeholder='{description}' />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div classNAme="transaction">
        <div className='transaction'>
          <div className='left'>
            <div className='name'>LG fridge</div>
            <div className='description'> new fridge</div>
          </div>
          <div className='right'>
            <div className='price red'>₹5000</div>
            <div className='datetime'>2024-1-24</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Freelance</div>
            <div className='description'>Side Gig</div>
          </div>
          <div className='right'>
            <div className='price green'>+₹5000</div>
            <div className='datetime'>2024-1-24</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New home</div>
            <div className='description'>Moving into new place</div>
          </div>
          <div className='right'>
            <div className='price red'>-₹2000000</div>
            <div className='datetime'>2024-1-24</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
