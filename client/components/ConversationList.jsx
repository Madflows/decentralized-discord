import React from "react";
import styles from "../styles/conversationList.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

import friends from "../assets/icons/friends.svg";
import nitro from "../assets/icons/nitro.svg";

import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'

const DUMMY_DMS = [
    {
      id: 1,
      name: 'Bill Gates',
      avatar: avatar1,
    },
    {
      id: 2,
      name: 'Mark Zuckerberg',
      avatar: avatar2,
    },
    {
      id: 3,
      name: 'Dependabot',
      avatar: avatar3,
    },
    {
      id: 4,
      name: 'Defendabot',
      avatar: avatar4,
    },
  ]


const ConversationList = () => {
    const [dms, setDms] = useState(DUMMY_DMS)


  return (
    <div className={styles.conversations}>
      <div className={styles.conversationListTop}>
        <input type="search" className={styles.searchField} placeholder="Find or start a conversation" />
      </div>
      <div className={styles.conversationsContainer}>
        <button className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              src={friends}
              height={25}
              width={25}
              alt="friends"
              className={styles.svg}
            />
          </div>
          <p>Friends</p>
        </button>
        <button className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              src={nitro}
              height={25}
              width={25}
              alt="free nitro"
              className={styles.svg}
            />
          </div>
          <p>Nitro</p>
        </button>
      <div className={styles.dmTitle}>
        <h2>Direct Messages</h2>
      </div>

      {
        dms.map((dm, index) => (
            <div key={index}>Dm Card</div>
        ))
      }
      </div>
    </div>
  );
};

export default ConversationList;
