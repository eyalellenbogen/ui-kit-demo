import { Card } from '../../../../../libs/ui-kit/src/lib/card/card';
import styles from './card-demo.module.scss';

export interface IUser {
  name: string;
  avatar?: string;
  email: string;
}

const userList: IUser[] = [
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

export function CardDemo() {
  const users = userList;

  return (
    <div className={styles['user-list']}>
      {users.map((u, i) => (
        <div key={i} className={styles['user-list__item']}>
          <Card user={u}></Card>
        </div>
      ))}
    </div>
  );
}
