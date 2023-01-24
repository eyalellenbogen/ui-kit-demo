/* eslint-disable react/jsx-no-useless-fragment */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  List,
  ListItem,
  ListItemWithIcon,
  useKeyboardNavigation,
} from '@ui-kit-worskpace/ui-kit';
import { Fragment, useEffect, useRef, useState } from 'react';

import styles from './style.module.scss';

type User = { name: string };
export function ListDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const users: User[] = [
    { name: 'Tony Stark' },
    { name: 'Natasha Romanov' },
    { name: 'Bruce Banner' },
    { name: 'Steve Rogers' },
    { name: 'Carol Danvers' },
    { name: 'Clint Barton' },
    { name: 'Peter Parker' },
    { name: 'Scott Lang' },
  ];

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <div className={styles['container']}>
      <List
        ref={ref}
        items={users.map((u) => ({ label: u.name }))}
        onSelected={(item) => console.log('selected', item)}
      ></List>
    </div>
  );
}
