import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Select, Button } from 'antd';

export default function Login({onLogin}) {
  const [username, setUsername] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [name, setName] = useState(null);
  const [postal_code, setPostalCode] = useState(null);

  const { Option } = Select;

  return (
    <div className='App'>
      <Form className="loginForm">
        <Form.Item
          label="Nombre de usuario"
          name="username"
          rules={[{ required: true, message: 'Necesita ingresar un nombre de usuario' }]}
        >
          <Input value={username} onChange={e => setUsername(e.target.value)} placeholder="Nombre de usuario"/>
        </Form.Item>
        <Form.Item
          label="Edad"
          name="age"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Edad"
            value={age}
            maxLength={2}
            onChange={e => {
              const { value } = e.target;
              const reg = /^-?\d*(\.\d*)?$/;
              if ((!isNaN(value) && reg.test(value)) || value === '') {
                setAge(value);
              }
            }
          }/>
        </Form.Item>
        <Form.Item
          label="Sexo"
          name="gender"
          rules={[{ required: true, message: 'Necesita ingresar su sexo' }]}
        >
          <Select placeholder="Por favor elija una opción" onChange={value => setGender(value)}>
            <Option value={0}>Hombre</Option>
            <Option value={1}>Mujer</Option>
          </Select>

        </Form.Item>
        <Form.Item
          label="Nombre"
          name="name"
        >
          <Input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre"/>
        </Form.Item>
        <Form.Item
          label="Código postal"
          name="postal_code"
        >
          <Input value={postal_code} onChange={e => setPostalCode(e.target.value)} placeholder="Código postal"/>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => {
              if (username === '' || age === '') return;
              return axios.post('https://api-escaperoom-cruzroja.herokuapp.com/register', {
                username,
                age,
                gender,
                name,
                postal_code
              }).then(data => onLogin(data.data.token)).catch(error => console.error(error));
            }}
            type="primary">Registrate</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
