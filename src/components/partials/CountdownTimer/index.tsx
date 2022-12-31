import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const defuaultTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}

const Timer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    @media (min-width:550px){
        grid-template-columns: repeat(auto-fit, minmax(50px,1fr));
    }
    background: #e200bc;
    color: #FFF;
    justify-content: center;

    .timerItem{
        padding: 2rem;
        text-align: center;
        font-size: 2rem;

        .info{
            display: block;
            text-align: center;
            font-size:1rem;
        }

    }

`


const CountdownTimer = (props:any) => {

    const [time, setTime] = useState(defuaultTime)

    useEffect(() => {
      const intervalId = setInterval(()=> {
        const countdownTime = new Date(props.countdownDate).getTime()
        updateTime(countdownTime)
      },1000)
    
      return () => {
        clearInterval(intervalId)
      }
    }, [ props.countdownDate ])

    const updateTime = (countdownTime:number) => {
        const second = 1000,
        minute = second*60,
        hour = minute*60,
        day = hour*24

        let now = new Date().getTime(), distance = countdownTime - now
        const days= Math.floor(distance/day),
        hours = Math.floor((distance%day)/hour),
        minutes = Math.floor((distance%hour)/minute),
        seconds =  Math.floor((distance%minute)/second)

        setTime({
            days, //* days:days 
            hours,
            minutes,
            seconds
        })

    }
    

    return (
        <>
            <Timer>
                <div className="timerItem">
                    {time.days} <span className='info'>Días</span>
                </div>
                <div className="timerItem">
                    {time.hours} <span className='info'>Horas</span>
                </div>
                <div className="timerItem">
                    {time.minutes} <span className='info'>Minutos</span>
                </div>
                <div className="timerItem">
                    {time.seconds} <span className='info'>Segundos</span>
                </div>
            </Timer>
        
        </>
    )
}

export default CountdownTimer