import React from 'react';
import { Button } from 'antd';
import { HomeOutlined, ExportOutlined } from '@ant-design/icons';

export default function PendrivePassword({
  currentRoom,
  lastVisitedRoom,
  onHomeClick,
  onCurrentRoomClick
}) {
  return (
    <div className='sideMenu'>
      <Button
        disabled={currentRoom === 0}
        className='homeSide-menu'
        onClick={onHomeClick}
        icon={<HomeOutlined />}
      />
      <Button
        disabled={lastVisitedRoom === currentRoom}
        onClick={onCurrentRoomClick}
        icon={<ExportOutlined />}
      />
    </div>
  );
};
