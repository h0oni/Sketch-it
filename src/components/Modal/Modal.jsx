import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardMedia } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

const Modal = ({ selectedImage, setSelectedImage }) => {
    const classes = useStyles();

    const handleClick = (e) => {
        // if (e.target.classlist.contains(classes.backdrop)){
            setSelectedImage(null);
        // }
        
    }
    return (
        <motion.div className={classes.backdrop} 
                    initial={{opacity:0}} 
                    animate={{opacity:1}}>
            
            <Card className={classes.card}>
                <motion.div className={classes.close} onClick={handleClick}
                initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
                    <CloseIcon fontSize="large" />
                </motion.div>
                <CardMedia className={classes.image} image={selectedImage} title='Enlarged'/>
            </Card>
        </motion.div>
    )
}

export default Modal
