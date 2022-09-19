import styles from '../styles/chatview.module.css';

import {  useState, useEffect } from 'react';


const Chatview = () => {
  return (
    <div className={styles.chatView}>
        <div className={styles.messagesContainer}></div>
    </div>
  )
}

export default Chatview