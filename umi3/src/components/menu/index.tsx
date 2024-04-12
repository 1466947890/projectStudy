import { useCallback, useMemo, useState } from 'react';
import { NavLink } from 'umi';
import styles from './index.less';

export default function Menu() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState('');

  return (
    <div>
      <div>
        <NavLink to={'/goods/1'} activeStyle={{color: "#393"}}>商品分类1</NavLink>
      </div>
      <div>
        <NavLink to={'/goods/2'} activeStyle={{color: "#393"}}>商品分类2</NavLink>
      </div>
      <div>
        <NavLink to={{pathname:"/goods/3", search: '?a=1'  }} activeStyle={{color: "#393"}}>商品分类3</NavLink>
      </div>
      <div>
        <NavLink to={{pathname:"/goods/4", search: '?a=2'  }} activeStyle={{color: "#393"}}>商品分类4</NavLink>
      </div>
      <div>
        <NavLink to={'/goods/5'} activeStyle={{color: "#393"}}>商品分类5</NavLink>
      </div>
    </div>
  );
}
