import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="footer">
            <a href ="https://github.com/samiyazaki" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
            <a href="https://www.linkedin.com/in/seiya-miyazaki/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://stackoverflow.com/users/20827813/seiya-miyazaki" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faStackOverflow} size="3x" />
                </a>
        </footer>
    );
}