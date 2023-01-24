// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  List,
  ListItem,
  useKeyboardNavigation,
} from '@ui-kit-worskpace/ui-kit';
import { Fragment, useEffect, useRef, useState } from 'react';
import './app.scss';

type User = { name: string };
export function App() {
  const ref = useRef<HTMLDivElement>(null);
  const items: User[] = [
    { name: 'Tony Stark' },
    { name: 'Natasha Romanov' },
    { name: 'Bruce Banner' },
    { name: 'Steve Rogers' },
  ];

  // const [uiSelectedIndex, setUiSelectedIndex] = useState(0);
  // const { focusedIndex, selectedIndex } = useKeyboardNavigation(ref, 4);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  // useEffect(() => {
  //   setSelectedIndex(selectedIndex);
  // }, [selectedIndex]);

  // function setSelectedIndex(index: number) {
  //   setUiSelectedIndex(index);
  // }

  return (
    <>
      {/* <List
        ref={ref}
        items={items.map((x) => ({ label: x.name }))}
        onSelected={(item) => console.log('selected', item)}
      ></List> */}
      {/* <List
        ref={ref}
        items={items}
        onSelected={(item) => console.log(item)}
        itemRenderer={(u: User) => {u.label} - is the best!}
      ></List> */}
      {/* <List ref={(el) => (ref.current = el)}>
        {items.map((item, index) => (
          <Fragment key={index}>
            <ListItem
              selected={uiSelectedIndex === index}
              focused={focusedIndex === index}
              onClick={() => setSelectedIndex(index)}
            >
              {item.name}
            </ListItem>
            <Seperator show={index === 0}></Seperator>
          </Fragment>
        ))}
      </List> */}
    </>
  );
}

function Seperator({ show }: { show: boolean }) {
  return show ? <hr></hr> : null;
}

export default App;
