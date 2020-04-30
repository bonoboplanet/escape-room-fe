import React from 'react';

const link = 'https://cruzroja.tv/video/10140/bullying-o-acoso-escolar';

export default function RoomSix() {
  return (<div className='roomSix'>
    <div>ENHORABUENA! Gracias a ti hemos conseguido descubrir dónde se encuentran las tomas</div>
    <div className='roomSix-link'>
      <a rel='noreferrer noopener' target='_blank' href={link}>{link}</a>
    </div>
    <div><p>Averigua el año en el que se conocieron nuestros compañeros y vieron el vídeo<br />
    que les impulsoó a hacer esta película...</p></div>
    </div>)
}
