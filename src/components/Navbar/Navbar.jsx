import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                        <img src='https://th.bing.com/th/id/R6575fffe71b6c294055e417efc34ffe3?rik=ZajaT4IslV%2bd2A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_467479.png&ehk=lHrGkwnBKYRuxr1B83zTe9VK1BBa%2bqJcXMyHeeFFzh4%3d&risl=&pid=ImgRaw' alt="Sketch-it" height="25px" className={classes.image} />
                        Sketch-it
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
