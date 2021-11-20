import React from 'react';
import './navbar.css';

export default function Navbar({text}) {
    return (
        <div className='navbar-style'>
            {text}
        </div>
    );
}