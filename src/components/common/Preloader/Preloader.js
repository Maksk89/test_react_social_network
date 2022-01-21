import React from 'react';
import preloader from '../../../assets/images/loader.gif';

function Preloader (props) {
    return (
        <div style = {{backgroundColor: 'white'}}>
            <img src = {preloader} />
        </div>
    );
}

export default Preloader;