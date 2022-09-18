import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/roomAvatar.module.css'

const RoomAvatar = ({id, avatar, name}) => {
    const router = useRouter();
    function changeUrl() {
        router.push(`?channel=${id}&name=${name}`)

    }


  return (
    <button className={styles.wrapper} onClick={changeUrl}>
        <div className={`group ${styles.roomAvatar}`}>
            <Image 
                src={avatar}
                className={styles.roomAvatarImage}
                height={48}
                width={48}
                alt={name}
            />
            <div className={`group-hover:scale-100 origin-left transition ${styles.tooltip}`}>
                <p>{name}</p>
            </div>
        </div>

    </button>
  )
}

export default RoomAvatar