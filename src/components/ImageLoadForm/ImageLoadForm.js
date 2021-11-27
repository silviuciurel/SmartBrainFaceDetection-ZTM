import React from 'react';
import '../../App.css';

const ImageLoadForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in the pictures you upload. Give it a try'}
            </p>
            <div className='w-50 center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70' type='text' />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
            </div>

        </div>
    )
}

export default ImageLoadForm;