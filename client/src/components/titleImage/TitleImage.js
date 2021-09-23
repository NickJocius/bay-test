import React from 'react';
import styles from './TitleImage.module.css';

const TitleImage = () => {
    return (
        <div className={`${styles.ImageCont} `}>
            
            <p className="mx-4">Geofencing:</p>
            <p className="mx-4">Location-base</p> 
            <p className="mx-4">Technology for</p>
            <p className="mx-4">Recruitment</p>
            <p className="mx-4">Strategies.</p>
            
        </div>
    )
}

export default TitleImage;
