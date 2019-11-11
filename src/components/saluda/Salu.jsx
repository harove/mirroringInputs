import React from 'react';
import './saluda.css';

const Salu = (props) => {
    const {texto, children} = props;

    return (
        <div className = "saluda">
            <div>
                {texto}
                {children}
            </div>
        </div>
    );

};

export default Salu;
