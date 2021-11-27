import React from 'react';

const Navigation = () => {
    const style = { display: 'flex', justifyContent: 'flex-end' };
    return (
        <nav style={style}>
            <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    )
}

export default Navigation;