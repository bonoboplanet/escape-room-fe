import React, { useState } from 'react';
import { Input, Button } from 'antd';

export default function PendrivePassword() {
  const [passValue, setPassValue] = useState(null);

  return (
    <div className='penDrive-password'>
      <Input
        className='keyInput'
        placeholder='clave'
        value={passValue}
        onChange={e => setPassValue(e.target.value)}
      />
      <Button
        onClick={() =>{}}
        disabled={!passValue || passValue === ''}
        type="primary">
        Continuar
      </Button>
    </div>
  );
};
