import { PropsWithChildren } from 'react';
import { ListItemProps } from '../list-item/list-item';
import styles from './list-item-with-icon.module.scss';

export interface ListItemWithIconProps extends ListItemProps {
  iconName: string;
}

export function ListItemWithIcon({
  focused,
  selected,
  onClick = () => {
    //do nothing
  },
  iconName,
  children,
}: PropsWithChildren<ListItemWithIconProps>) {
  const base = styles['list-item'];
  const selectedClass = selected ? styles['list-item--selected'] : '';
  const focusedClass = focused ? styles['list-item--focused'] : '';

  return (
    <div
      onClick={(ev) => onClick(ev)}
      className={`${base} ${selectedClass} ${focusedClass}`}
    >
      <i className={`mr-4 fa fa-${iconName}`}></i> {children}
    </div>
  );
}
