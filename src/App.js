import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppFooter from './AppFooter';
import Timer from './utils/Timer';
import RoomOne from './rooms/RoomOne';
import RoomTwo from './rooms/RoomTwo';
import RoomThree from './rooms/RoomThree';
import RoomFour from './rooms/RoomFour';
import RoomFive from './rooms/RoomFive';
import RoomSix from './rooms/RoomSix';
import RoomFinal from './rooms/RoomFinal';
import SideMenu from './components/SideMenu';
import './App.css';

const ROOMS_MAP = [<RoomOne />, <RoomTwo />, <RoomThree />, <RoomFour />, <RoomFive />, <RoomSix />, <RoomFinal />];

const getCurrentUser = () => {
  return axios.get('https://api-escaperoom-cruzroja.herokuapp.com/current_user',
  {
    headers: {
      Authorization: window.sessionStorage.getItem("escapeToken")
    }
  });
};

function App() {
  const [passValue, setPass] = useState(null);
  const [roomIndex, setRoomIndex] = useState(0);
  const [lastVisitedRoomIndex, setLastVisitedRoomIndex] = useState(0);
  const [roomId, setRoomId] = useState(null);
  const [showFooter, setShowFooter] = useState(true);
  const [timeLeft, setTimeLeft] = useState(null);

  function resolveRoom(roomId, clue) {
    return axios.post(
      `https://api-escaperoom-cruzroja.herokuapp.com/rooms/${roomId}/validate`,
      { clue },
      {
        headers: {
          Authorization: window.sessionStorage.getItem("escapeToken")
        }
      }
    ).then(data => {
      const { room } = data.data;
      setRoomIndex(room.number - 1);
      setLastVisitedRoomIndex(room.number - 1);
      setRoomId(room.id);
      setPass(null);
    });
  };

  useEffect(() => {
      getCurrentUser().then(data => {
        const {user} = data.data;
        setRoomId(user.current_room_id);
        setTimeLeft({
          hours: user.hours_left,
          minutes: user.minutes_left,
          seconds: user.seconds_left
        })
      });
  }, []);

  return (
    <div className='App'>
      <SideMenu
        currentRoom={roomIndex}
        lastVisitedRoom={lastVisitedRoomIndex}
        onHomeClick={() => {
          setLastVisitedRoomIndex(roomIndex);
          setRoomIndex(0);
          setShowFooter(false);
        }}
        onCurrentRoomClick={() => {
          setShowFooter(true);
          setRoomIndex(lastVisitedRoomIndex);
        }}
      />

      <Timer
        timer={timeLeft}
        setTimer={setTimeLeft}
      />

      {ROOMS_MAP[roomIndex]}

      {showFooter && roomIndex < ROOMS_MAP.length - 1 ?
        <AppFooter
          passValue={passValue}
          onInputChange={evt => setPass(evt.target.value)}
          onClick={() => resolveRoom(roomId, passValue)}
        />
        : null
      }
    </div>
  );
}

export default App;
