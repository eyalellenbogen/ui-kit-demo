/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import { useForwardRef } from '../behaviors/use-forwardref';
import styles from './list.module.scss';
import { useKeyPress } from '../behaviors/use-key-press';

export type ListItemType = {
  label: string;
};

/* eslint-disable-next-line */
export interface ListProps<T extends ListItemType> {
  items: T[];
  onSelected?: (item: T) => void;
}

export const List = forwardRef(function List<T extends ListItemType>(
  { items, onSelected }: ListProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const forwardedRef = useForwardRef(ref);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const downPress = useKeyPress(forwardedRef, 'ArrowDown');
  const upPress = useKeyPress(forwardedRef, 'ArrowUp');
  const enterPress = useKeyPress(forwardedRef, 'Enter');

  function getItemClasses(index: number) {
    return `${styles['list-item']} ${
      index === selectedIndex ? styles['list-item--selected'] : ''
    } ${index === focusedIndex ? styles['list-item--focused'] : ''}`;
  }

  function selectItem(index: number) {
    setSelectedIndex(index);
    if (onSelected) {
      onSelected(items[index]);
    }
  }

  useEffect(() => {
    if (items.length && downPress) {
      setFocusedIndex((prevState) =>
        prevState < items.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);
  useEffect(() => {
    if (items.length && upPress) {
      setFocusedIndex((prevState) =>
        prevState > 0 ? prevState - 1 : prevState
      );
    }
  }, [upPress]);
  useEffect(() => {
    if (enterPress) {
      selectItem(focusedIndex);
    }
  }, [focusedIndex, enterPress]);

  return (
    <div className={styles['list']} tabIndex={0} ref={ref}>
      {items.map((item, index) => (
        <div
          className={getItemClasses(index)}
          onClick={() => selectItem(index)}
          key={index}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
});
