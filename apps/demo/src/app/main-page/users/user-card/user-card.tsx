import { IUser } from '../types';
import styles from './user-card.module.scss';

/* eslint-disable-next-line */
export interface UserCardProps {
  user: IUser;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className={styles['user-card']}>
      <div className={styles['user-card__top']}>
        <div className={styles['user__avatar']}>
          <img alt="" src={`/assets/images/${user.avatar}`} />
        </div>
        <div className={styles['user__info']}>
          <div className={styles['user__name']}>{user.name}</div>
          <div className={styles['user__email']}>{user.email}</div>
        </div>
      </div>
      <div className={styles['user-card__bottom']}>
        <button className={styles['btn1']}>Delete</button>
        <button className={styles['btn2']}>Edit</button>
      </div>
    </div>
  );
}

export default UserCard;
