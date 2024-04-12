import { useCallback, useMemo, useState } from 'react';
import styles from './index.less';


export default function CommentDetail() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState('');

  return (
    <>
      <div>
        <h3>page CommentDetail</h3>
      </div>
    </>
  );
}
