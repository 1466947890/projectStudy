import { useCallback, useMemo, useState } from 'react';
// import { history } from 'umi';
import { useHistory, useParams, useLocation, useRouteMatch } from 'umi';
import styles from './index.less';


export default function GoodsDetail() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState('');

  const history = useHistory()
  const {id} = useParams()
  const {search} = useLocation()
  const routeMatch = useRouteMatch()

  const getComment = () => {
    // history.push("/goods/3/comment")
    history.push({pathname: "/goods/3/comment", query: {a: 3}})
  }

  return (
    <>
      <div>
        <h3>page GoodsDetail-{id}</h3>
        <div>{search}</div>
        <button onClick={getComment}>编程式跳转</button>
      </div>
    </>
  );
}
