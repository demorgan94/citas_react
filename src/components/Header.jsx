import React from 'react';
import '../scss/header.scss';
import PropTypes from 'prop-types'

const Header = (props) => {
   return (
      <header>
         <nav className="navbar">
            <h1 className="mx-auto">{props.titulo}</h1>
         </nav>
      </header>
   )
}

Header.propTypes = {
   titulo: PropTypes.string.isRequired
}

export default Header;