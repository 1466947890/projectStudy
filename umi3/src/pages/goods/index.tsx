import { useCallback, useMemo, useState } from 'react';
import styles from './index.less';


export default function Goods() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState('');
  // function getNum() {
  //   console.log('getNum');
  //   return count * 100;
  // }

  // const getNumMemo = useMemo(() => {
  //   console.log('getNum');
  //   return count * 100;
  // }, [count]);

  const updateCount = useCallback(() => {
    console.log("夫业务");
  }, [count])

  return (
    <>
      <div>
        <h3>page Goods</h3>
      </div>
    </>
  );
}
