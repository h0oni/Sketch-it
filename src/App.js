// import { Modal } from '@material-ui/core';
// import { MovieFilterSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import { Products, Navbar, Modal } from './components'

const App = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div>
            <Navbar />
            <Products setSelectedImage={setSelectedImage}/>
            { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/> }
        </div>
    )
}

export default App;
