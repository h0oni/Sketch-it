import React from 'react'
import { Card, CardMedia, CardContent, Typography, IconButton, } from '@material-ui/core'
import { motion } from 'framer-motion';
import Timer from './Timer/Timer'
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

import useStyles from './styles';

const Product = ({ product, setSelectedImage }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <motion.div className={classes.motion} 
            whileHover={{ opacity:1, scale: 1.01 }}>
                <CardMedia className={classes.media} image={product.image} title={product.name} 
                onClick={() => setSelectedImage(product.image)} />
            </motion.div>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography varient="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <div className={classes.priceBox}>
                        <IconButton aria-label="Remove">
                            <IndeterminateCheckBoxIcon style={{ color: 'tomato' }}/>
                        </IconButton>
                        <Typography varient="h5" className={classes.priceText}>
                            {product.price}
                        </Typography>
                        <IconButton aria-label="Add">
                            <AddBoxIcon style={{ color: 'tomato' }}/>
                        </IconButton>
                    </div>
                </div>
                <div className={classes.mid_div}>
                    <Typography varient="h2" style={{ color: 'tomato' }} className={classes.description}>
                            {product.description}
                    </Typography>
                    <Typography varient="h2" color="textSecondary">
                            {product.betsSoFar} people placed bets
                    </Typography>
                </div>
            </CardContent>
            <Timer />
        </Card>
    )
}

export default Product;