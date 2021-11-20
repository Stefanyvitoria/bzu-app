import React from "react";
import './button-menu.css';

export default function ButtonMenu({text}) {

    function buttonclick() {
        console.log('click');
        return;
    }

    return (
        <button 
            className="button-menu"
            onClick={buttonclick}>
            {text}
        </button>
    );
}