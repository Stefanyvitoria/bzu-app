import React from "react";
import './button-menu.css';

export default function ButtonMenu({text, href="#"}) {

    return (
        <a 
            className="button-menu"
            href={href}
            >
            {text}
        </a>
    );
}