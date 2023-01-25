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

  const [uiSelectedIndex, setUiSelectedIndex] = useState(0);
  const { focusedIndex, selectedIndex } = useKeyboardNavigation(
    ref,
    users.length
  );

  useEffect(() => {
    setSelectedIndex(selectedIndex);
  }, [selectedIndex]);

  function setSelectedIndex(index: number) {
    setUiSelectedIndex(index);
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <div className={styles['container']}>
      <List ref={ref}>
        {users.map((user, index) => (
          <Fragment key={index}>
            <ListItem
              selected={uiSelectedIndex === index}
              focused={focusedIndex === index}
              onClick={() => setSelectedIndex(index)}
            >
              {user.name}
            </ListItem>
            <Divider show={!!(index % 2)}></Divider>
          </Fragment>
        ))}
        <ListItemWithIcon iconName="cog">Settings</ListItemWithIcon>
      </List>
    </div>
  );
}

function Divider({ show }: { show: boolean }) {
  return show ? <hr></hr> : null;
}
