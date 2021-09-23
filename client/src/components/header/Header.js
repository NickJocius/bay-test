import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/bayard_logo.svg';

const Header = () => {
    return (
        <div className={`${styles.Header} d-flex container-fluid flex-column flex-lg-row justify-content-start`}>
            <img alt="logo" src={logo} id={`${styles.logo} `}></img>
            <span className={`${styles.Slogan}`}>Transforming Talent</span>
        </div>
    )
}

export default Header;
