import React from 'react';

const link1 = 'https://www.cruzrojajuventud.org/jornadas-acoso-escolar';
const link2 = 'https://www.es.amnesty.org/acoso-escolar/';
const link3 = 'http://www.educacionyfp.gob.es/educacion/mc/cniie/convivenciaescolar/objetivos.html';
const link4 = 'http://www.aepae.es/';
const link5 = 'http://www.anar.org/acoso-escolar';

export default function RoomTwo() {
  return (<div className='roomTwo'>
    <div>Antes de iniciar el rodaje, se hizo un importante trabajo de documentación a través de recursos disponibles, tales como:</div>
    <div className='roomTwo-links'>
      <a rel='noreferrer noopener' target='_blank' href={link1}>{link1}</a>
      <a rel='noreferrer noopener' target='_blank' href={link2}>{link2}</a>
      <a rel='noreferrer noopener' target='_blank' href={link3}>{link3}</a>
      <a rel='noreferrer noopener' target='_blank' href={link4}>{link4}</a>
      <a rel='noreferrer noopener' target='_blank' href={link5}>{link5}</a>
    </div>
    <div>Fue muy importante <i>primero</i> repasar qué decía la <i>prensa</i> para poder avanzar.</div>
    </div>)
}
