import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MidSection.css';

function MidSection() {
  return (
    <div className='mid-container'>
      <h1>DISCOVER </h1>
      <h3>amazing startups</h3>
      <p>Find great startups curated by our experts for investing.</p>
      <div className='mid-btns'>
      <input
          type='text'
          placeholder='Startup Name..'
          className='search-input'
        />
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
}

export default MidSection;
