import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product'
import useStyles from './styles';

const products = [
    { id: 1, name: 'OrderID#0001', betsSoFar:'3', description: 'Large', price: '5.99', image:'https://th.bing.com/th/id/OIP.fE2T6OhzjrvzL7uI2o2s7wHaLH?pid=ImgDet&rs=1' },
    { id: 2, name: 'OrderID#0002', betsSoFar:'8', description: 'Medium', price: '10.99', image:'https://th.bing.com/th/id/OIP._TUV8y1Lh-uCkAx7EHbFjQHaLH?pid=ImgDet&rs=1' },
    { id: 3, name: 'OrderID#0003', betsSoFar:'5', description: 'Small', price: '10.99', image:'https://i.pinimg.com/originals/0a/8e/12/0a8e12a8e64b341eafc73c9d46bc3d9c.jpg' },
]

const Products = ({ setSelectedImage }) => {
    const classes = useStyles();

    return(
    <main className={classes.content}> 
        <div className={classes.toolbar} />
        <Grid container justify = "center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} setSelectedImage={setSelectedImage}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;