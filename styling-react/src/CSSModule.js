import React from 'react';
import style from './CSSModule.module.scss';

const CSSModule = () => {
    return (
        <div className={`${style.wrapper} ${style.inverted}`}>
            안녕하세여, 전 <span className="something">CSSModule!</span> 
        </div>
    );
};

export default CSSModule;