import './neonButton.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NeonButton({ title, url }) {

    const clearClouds = () => {
        const cloud = document.getElementsByTagNameNS('canvas');
        cloud.style.display = "none";
    }
    return (
        url === "linkedin" ?
            <a href={'https://www.linkedin.com/in/tudor-dan-pop-95363b66/'} target="_blank" className="neon-menu-item" rel="noopener noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {title}
            </a> :
            <Link to={url} className="neon-menu-item">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {title}
            </Link>
    );
}

export default NeonButton;
