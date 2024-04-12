import { useCallback, useMemo, useState } from 'react';
import styles from './index.less';
import { NavLink } from 'umi';

export default function Nav() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState('');

  return (
    <>
      {/* <div>
        <h3>page Nav</h3>
      </div> */}
      <NavLink to="/goods" activeStyle={{ color: '#393' }}>
        商品
      </NavLink>
      <NavLink to="/login" activeStyle={{ color: '#393' }}>
        登录
      </NavLink>
      <NavLink to="/register" activeStyle={{ color: '#393' }}>
        注册
      </NavLink>
    </>
  );
}
