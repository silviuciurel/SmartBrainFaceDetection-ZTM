import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';
import brain from './brain-64.png'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilty className="Tilt br2 shadow-2"
                style={{ height: 150, width: 150, transformStyle: 'preserve-3d' }}
                max="70">
                <div style={{ transform: 'translateZ(50px)' }} className="pa3">
                    <img style={{ paddingTop: '29px' }} alt='' src={brain} />
                </div>
            </Tilty>
        </div >
    )
}

export default Logo;