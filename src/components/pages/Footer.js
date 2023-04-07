import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <a href ="https://github.com/samiyazaki" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> github
                </a>
            <a href="https://www.linkedin.com/in/seiya-miyazaki/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> linkedin
                </a>
                <a href="https://stackoverflow.com/users/20827813/seiya-miyazaki" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-stack-overflow"></i> stack overflow
                </a>
        </footer>
    );
}