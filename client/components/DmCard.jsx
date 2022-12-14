import Image from 'next/image'
import styles from '../styles/dmCard.module.css'
import { useRouter } from 'next/router'

const DmCard = ({ name, status, avatar, id }) => {
  const router = useRouter()

  const changeUrl = () => {
    router.push(`?conversation=${id}&name=${name}`)
  }

  return (
    <button className={styles.dmCard} onClick={changeUrl}>
      <div className={styles.dmAvatarContainer}>
        <Image
          src={avatar}
          className={styles.dmAvatar}
          height={48}
          width={48}
          alt={name}
        />
        <div className={`status ${styles.dmCardStatus}`} id={status} />
      </div>
      <p className={styles.dmCardName}>{name}</p>
    </button>
  )
}

export default DmCard
