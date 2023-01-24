import { IUser } from '../types';
import UserCard from '../user-card/user-card';
import styles from './user-list.module.scss';

/* eslint-disable-next-line */
export interface UserListProps {}

const users: IUser[] = [
  {
    name: 'Tony Stark',
    email: 'ironman76@fancypants.com',
    avatar: 'ironman.png',
  },
  {
    name: 'Steve Rogers',
    email: 'cap@fancypants.com',
    avatar: 'cap.png',
  },
  {
    name: 'Bruce Banner',
    email: 'smash@fancypants.com',
    avatar: 'hulk.png',
  },
  {
    name: 'Donald Blake',
    email: 'love.my.mjolnir@fancypants.com',
    avatar: 'thor.png',
  },
  {
    name: 'Carol Danvers',
    email: 'cptmarvel@fancypants.com',
    avatar: 'marvel.png',
  },
];

export function UserList(props: UserListProps) {
  return (
    <div className={styles['user-list']}>
      {users.map((user, index) => (
        <div className={styles['user-card']}>
          <UserCard key={index} user={user}></UserCard>
        </div>
      ))}
      {/* <app-user-card *ngFor="let user of users" [user]="user"></app-user-card> */}
    </div>
  );
}

export default UserList;
