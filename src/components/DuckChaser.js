import React, {useState, useEffect} from 'react';
import './DuckChaser.css';
import Duck from '../assets/dfax9m4-04207846-0abb-49f9-9d0d-8dcc217caa4c.png';

function DuckChaser () {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const duckStyle = {
        left: position.x -25,
        top: position.y -25,
        position: 'fixed',
    };

    return (
        <div>
            <img src={Duck} alt="duck" className="duck" style={duckStyle} />
        </div>
    );
}

export default DuckChaser;