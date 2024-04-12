import { useCallback, useMemo, useState } from 'react';
import Menu from '@/components/menu';

import styles from './index.less';

export default function AsideLayouts(props: any) {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState('');

  return (
    <>
      <div className={styles.layout2_wrap}>
        <div className={styles.layout2_nav}>
          <div className={styles.layout2_menu}>
          <Menu></Menu>
          </div>
          <div className={styles.layout2_content}>{props.children}</div>
        </div>
      </div>
    </>
  );
}
