/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useState } from 'react';

export const useKeyPress = function (
  ref: RefObject<HTMLElement | undefined>,
  targetKey: string
) {
  const [keyPressed, setKeyPressed] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    element.addEventListener('keydown', downHandler);
    element.addEventListener('keyup', upHandler);

    return () => {
      element.removeEventListener('keydown', downHandler);
      element.removeEventListener('keyup', upHandler);
    };
  }, [ref]);

  function downHandler({ key }: KeyboardEvent) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  return keyPressed;
};
