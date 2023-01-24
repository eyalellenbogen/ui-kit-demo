import { RefObject, useEffect } from 'react';

export function useFocusOnStart<T extends HTMLElement>(ref: RefObject<T>) {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);
}
