import React from 'react';
import '../App.css';
import './MidSection.css';

function MidSection() {
  return (
    <div className='mid-container'>
      <h1>DISCOVER </h1>
      <h3>amazing startups</h3>
      <br/>
      <p>Find great startups curated by our experts for investing.</p>
      <div className='mid-btns'>
        <input
          type='text'
          placeholder='Startup Name..'
          className='search-input'
        />
        <a href='#' className='btn btn--outline  thisbtn'>SEARCH
        </a>
        
      </div>
    </div>
  );
}

export default MidSection;
