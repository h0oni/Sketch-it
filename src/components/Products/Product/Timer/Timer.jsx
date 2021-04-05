import React, { useEffect, useState, useRef } from 'react'
import useStyles from './styles';
import { Typography } from '@material-ui/core'

const Timer = () => {
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('April  07  2021 00:00:00').getTime();
        interval.current = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const hours = Math.floor(distance / (1000*60*60));
            const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
            const seconds = Math.floor((distance % (1000*60)) / (1000));
            
            if (distance>0){
                setTime({hours, minutes, seconds});
            }
        },1000);
    };

    useEffect(()=>{
        console.log('a')
        startTimer();
        return ()=>{
            console.log('b')
            clearInterval(interval.current);
        }
    },[])

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section>
                <Typography variant='h5'>{time.hours}</Typography>
                <Typography><small>Hours</small></Typography>
            </section>
            <section>
                <Typography variant='h5'>:</Typography>
            </section>
            <section>
                <Typography variant='h5'>{time.minutes}</Typography>
                <Typography><small>Minutes</small></Typography>
            </section>
            <section>
                <Typography variant='h5'>:</Typography>
            </section>
            <section>
                <Typography variant='h5'>{time.seconds}</Typography>
                <Typography><small>Seconds</small></Typography>
            </section>
        </div>
    )
}

export default Timer
