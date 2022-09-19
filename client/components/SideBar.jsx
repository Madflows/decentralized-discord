import React from 'react';
import {  useEffect, useState} from "react";
import { useRouter } from 'next/router';
import { CaretDown, CaretUp } from 'phosphor-react';

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
  const [mobileAct, setMobileAct] = useState(false);
  return (
    <div className={`${styles.wrapper}`} data-active={mobileAct}>
      {
        channels.map((channel, index) => (
          <RoomAvatar key={index} id={channel.id} avatar={channel.avatar} name={channel.name} />
        ))
      }

      <div className='flex sm:hidden absolute right-2 bottom-6'>
        <button onClick={() => setMobileAct(!mobileAct)} className='cursor-pointer bg-semiDeepGrey rounded-full h-fit py-2 px-2'>
        <CaretUp size={24} weight="bold" className={`transition-all ${mobileAct && "rotate-180"}`} />
        </button>
      </div>
    </div>
  )
}


export default SideBar