import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--blue br3 bg-lightest-blue" 
                type='search' 
                placeholder='Search residents..'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;