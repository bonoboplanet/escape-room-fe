import React from 'react';
import fake from '../images/fake.png';

export default function RoomFour() {
  return (<div className='roomFour'>
    <p>¿Mucha información? ¿toda es real?</p>
    <p>Para dar el siguiente paso  es importante saber que la clave es</p>
    <img width={100} height={35} src={fake} />
    <p>Sigue investigando y ordena lo que es real, de menos a más...</p>
  </div>)
}
