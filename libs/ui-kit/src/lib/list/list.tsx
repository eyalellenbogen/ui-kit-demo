/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import styles from './list.module.scss';

export const List = forwardRef(function List(
  { children }: PropsWithChildren,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={styles['list']} tabIndex={0} ref={ref}>
      {children}
    </div>
  );
});
