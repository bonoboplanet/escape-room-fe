import React from 'react';
import { Input, Button } from 'antd';

export default function AppFooter({passValue, onInputChange, onClick}) {
  return (
    <div className='roomsFooter'>
      <Input className='keyInput' placeholder='clave' value={passValue} onChange={onInputChange}/>
      <Button onClick={onClick} disabled={!passValue || passValue === ''} type="primary">Continuar</Button>
    </div>
  );
}
