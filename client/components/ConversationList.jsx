import React from "react";
import styles from "../styles/conversationList.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

import friends from "../assets/icons/friends.svg";
import nitro from "../assets/icons/nitro.svg";

const ConversationList = () => {
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
      </div>
    </div>
  );
};

export default ConversationList;
