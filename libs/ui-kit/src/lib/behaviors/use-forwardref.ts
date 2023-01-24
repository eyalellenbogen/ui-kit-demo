import { ForwardedRef, useEffect, useRef } from 'react';

export const useForwardRef = <T extends Element>(
  ref: ForwardedRef<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValue: any = null
) => {
  const targetRef = useRef<T>(initialValue);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(targetRef.current);
    } else {
      targetRef.current = ref.current as unknown as T;
    }
  }, [ref]);

  return targetRef;
};
