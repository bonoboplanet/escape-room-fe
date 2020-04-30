import React from 'react';
import { Button } from 'antd';
import './App.css';

function Start({ onStart }) {
  return (
    <div className='App'>
      <div><p>En Castelló de la Plana se estaba rodando una película sobre acoso escolar.<br />
      Debido a la situación de emergencia sanitaria y a las medidas de confinamiento,<br />
      todas las personas que participaban en el rodaje han tenido que volver a sus casas.<br />
      Sin darse cuenta, la directora, el guionista, la productora y el cámara principal se<br />
      llevaron las tomas que componen la película.
      </p>
      <p>
      La película debe enviarse a la organización de los Premios Goya para que pueda optar<br />
      al galardón de este año. El plazo acaba en 2 horas.
      </p>
      <p>
      La única forma de que esto ocurra es que nos ayudes a localizar dónde han dejado las<br />
      tomas cada una de estas personas. ¿Nos ayudas?
      </p>
      </div>
      <div>
      <Button onClick={onStart} type='primary'>Empezar</Button>
      </div>
    </div>
  );
}

export default Start;
