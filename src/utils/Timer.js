
import React, { useEffect } from 'react'

export default function Timer ({timer, setTimer}) {

    useEffect(() => {
      if (timer) {
        setTimeout(() => {
          if (timer.seconds > 0) {
            setTimer({
              hours: timer.hours,
              minutes: timer.minutes,
              seconds: timer.seconds - 1
            });
          }
          if (timer.seconds === 0) {
            if (timer.minutes === 0) {
              if (timer.hours > 0) {
                setTimer({
                  hours: timer.hours - 1,
                  minutes: 59,
                  seconds: 59
                });
              } else{
                setTimer({
                  hours: 0,
                  minutes: 0,
                  seconds: 0
                });
              }
            } else {
              setTimer({
                hours: timer.hours,
                minutes: timer.minutes - 1,
                seconds: 59
              });
            }
          }
        }, 1000);
      }
    }, [timer, setTimer]);
    if (!timer) return null;
    return (
      <div className='timer'>
        { timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0
          ? <h1>Se acabó el tiempo!</h1>
          : <h1>Tiempo restante: {timer.hours}:{timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes }:{timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}</h1>
        }
      </div>
    );
}
