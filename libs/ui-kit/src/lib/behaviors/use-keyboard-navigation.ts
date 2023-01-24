/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useState } from 'react';
import { useKeyPress } from './use-key-press';

export function useKeyboardNavigation(
  ref: RefObject<HTMLElement | undefined>,
  totalItems: number,
  initialSeletedIndex = 0
) {
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSeletedIndex);
  const [focusedIndex, setFocusedIndex] = useState<number>(initialSeletedIndex);

  const downPress = useKeyPress(ref, 'ArrowDown');
  const upPress = useKeyPress(ref, 'ArrowUp');
  const enterPress = useKeyPress(ref, 'Enter');

  useEffect(() => {
    if (downPress) {
      setFocusedIndex((prevState) => {
        return prevState < totalItems - 1 ? prevState + 1 : prevState;
      });
    }
  }, [downPress]);
  useEffect(() => {
    if (upPress) {
      setFocusedIndex((prevState) =>
        prevState > 0 ? prevState - 1 : prevState
      );
    }
  }, [upPress]);
  useEffect(() => {
    if (enterPress) {
      setSelectedIndex(focusedIndex);
    }
  }, [focusedIndex, enterPress]);

  return { selectedIndex, focusedIndex };
}
