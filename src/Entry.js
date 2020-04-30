import React, { useEffect, useState } from 'react';
import axios from 'axios';
import App from './App';
import Start from './Start';
import Login from './Login';

const getCurrentUser = () => {
  return axios.get('https://api-escaperoom-cruzroja.herokuapp.com/current_user',
  {
    headers: {
      Authorization: window.sessionStorage.getItem("escapeToken")
    }
  });
};

function Entry() {
  const [started, setStarted] = useState(false);
  const [roomId, setRoomId] = useState(0);
  const [logged, setLogged] = useState(window.sessionStorage.getItem("escapeToken") ? true : false);

  const onStart = function() {
    axios.post(
      `https://api-escaperoom-cruzroja.herokuapp.com/rooms/${roomId}/validate`, null,
      {
        headers: {
          Authorization: window.sessionStorage.getItem("escapeToken")
        }
      }
    ).then(() => setStarted(true));
  };

  useEffect(() => {
    if (logged) {
      getCurrentUser().then(data => {
        const {user} = data.data;
        if(user.current_room_number === 0) {
          setRoomId(user.current_room_id);
        } else {
          setStarted(true);
        }
      });
    }
  }, [logged]);

  if (!logged) {
    return <Login onLogin={token => {
      window.sessionStorage.setItem("escapeToken", token);
      setLogged(true);
    }}/>
  } else {
    return started ? <App /> : <Start onStart={onStart}/>;
  }
}

export default Entry;
