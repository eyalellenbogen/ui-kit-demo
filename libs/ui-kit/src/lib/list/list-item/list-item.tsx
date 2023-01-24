import { MouseEvent, PropsWithChildren } from 'react';
import styles from './list-item.module.scss';

export interface ListItemProps {
  focused?: boolean;
  selected?: boolean;
  onClick?: (ev: MouseEvent) => void;
}

export function ListItem({
  focused,
  selected,
  onClick = () => {
    //do nothing
  },
  children,
}: PropsWithChildren<ListItemProps>) {
  const base = styles['list-item'];
  const selectedClass = selected ? styles['list-item--selected'] : '';
  const focusedClass = focused ? styles['list-item--focused'] : '';

  return (
    <div
      onClick={(ev) => onClick(ev)}
      className={`${base} ${selectedClass} ${focusedClass}`}
    >
      {children}
    </div>
  );
}
