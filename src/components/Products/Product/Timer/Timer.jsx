import React, { useEffect, useState, useRef } from 'react'
import useStyles from './styles';
import { Typography } from '@material-ui/core'

const Timer = () => {
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('April  07  2021 00:00:00').getTime();
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const hours = Math.floor(distance / (1000*60*60));
            const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
            const seconds = Math.floor((distance % (1000*60)) / (1000));
            
            if (distance>0){
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        },1000);
    };

    useEffect(()=>{
        startTimer();
        return ()=>{
            clearInterval(interval.current);
        }
    })

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section>
                <Typography variant='h5'>{timerHours}</Typography>
                <Typography><small>Hours</small></Typography>
            </section>
            <section>
                <Typography variant='h5'>:</Typography>
            </section>
            <section>
                <Typography variant='h5'>{timerMinutes}</Typography>
                <Typography><small>Minutes</small></Typography>
            </section>
            <section>
                <Typography variant='h5'>:</Typography>
            </section>
            <section>
                <Typography variant='h5'>{timerSeconds}</Typography>
                <Typography><small>Seconds</small></Typography>
            </section>
        </div>
    )
}

export default Timer
