import { useCallback, useMemo, useState } from 'react';
import Nav from '@/components/nav';
import styles from './index.less';


export default function BaseLayouts(props: any) {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState('');

  return (
    <>
      <div>
        <h3>page BaseLayouts</h3>
        <Nav></Nav>
        {props.children}
      </div>
    </>
  );
}
