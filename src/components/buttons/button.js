import  React from 'react';
import "./button.css";


export const Button = ({txt, bg:white, txtcolor:red}) => {
    return (
        <div>
            <button className='button-style'>
                {txt}
            </button>
        </div>
    );
}