import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoomOneContent from './RoomOneContent';

export default function RoomOne() {
  const [penDriveId, setPenDriveId] = useState(null);

  function getPenDriveId() {
    return axios.get('https://api-escaperoom-cruzroja.herokuapp.com/folders',
    {
      headers: {
        Authorization: window.sessionStorage.getItem("escapeToken")
      }
    }).then(data => setPenDriveId(data.data.folders[0].id));
  };

  useEffect(() => {
    if (!penDriveId) {
      getPenDriveId();
    }
  }, [penDriveId]);

  return (<RoomOneContent />)
}
