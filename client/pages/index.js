import Head from 'next/head'
import SideBar from '../components/SideBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* Sidebar */}
      <SideBar />
      <div className={styles.main}>
        {/* Conversation List */}
        Conversation List
        {/* Chat view */}
        Chat View
      </div>

    </div>
  )
}
