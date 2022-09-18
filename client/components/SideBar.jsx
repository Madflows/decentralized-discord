import React from 'react';
import {  useEffect, useState} from "react";
import { useRouter } from 'next/router';

import styles from '../styles/Sidebar.module.css';
import RoomAvatar from './RoomAvatar';

import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'

const DUMMY_CHANNELS = [
  {
    id: 1,
    name: 'general',
    avatar: avatar1,
  },
  {
    id: 2,
    name: 'codehub',
    avatar: avatar2,
  },
  {
    id: 3,
    name: 'devbuddies',
    avatar: avatar3,
  },
  {
    id: 4,
    name: 'buildspace',
    avatar: avatar4,
  },
]

const SideBar = () => {
  const router = useRouter();
  const [channels, setChannels] = useState(DUMMY_CHANNELS);
  return (
    <div className={styles.wrapper}>
      {
        channels.map((channel, index) => (
          <RoomAvatar key={index} id={channel.id} avatar={channel.avatar} name={channel.name} />
        ))
      }
    </div>
  )
}


export default SideBar