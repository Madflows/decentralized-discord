import Head from "next/head";
import Chatview from "../components/Chatview";
import ConversationList from "../components/ConversationList";
import SideBar from "../components/SideBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <main className={styles.main}>
        <ConversationList />
        <Chatview />
      </main>
    </div>
  );
}
