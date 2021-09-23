import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={`${styles.Footer} `}>
            <span className='text-center mx-1'>&copy; Bayard Advertising.</span>
            <span className="text-center mx-1"> All Rights Reserved.</span>
        </div>
    )
}

export default Footer;
