import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {
  const onClick = () => {
    console.log('Click');
}

  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}

Header.propTypes = {
  ime: PropTypes.string.isRequired,
};

export default Header
