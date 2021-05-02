import React, { Component } from 'react';
const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-light-blue' 
                type='search'
                placeholder='search robots'
                onChange={searchChange}
                //value={searchField}
            />
        </div>
     );
}

export default SearchBox;