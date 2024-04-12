import { useCallback, useMemo, useState } from 'react';
import styles from './index.less';
import Child from './child';
import AppContext from './context';
import { useRequest } from 'umi';

export default function IndexPage() {
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

  const getGoods = async () => {
    let res = await fetch("/umi/goods");
    let data = await res.json()

    console.log(data);
  }


  // console.log(useRequest("/umi/goods"));

  // console.log(useRequest("/book/5954bd2f11209b943d9e64ca"));
  
  
  const {error, data, loading} = useRequest("/book/5954bd2f11209b943d9e64ca")
  // console.log(data);
  
  const getBook = async() => {
    if(error){
      return <div>错误信息</div>
    }

    if(loading){
      return <div>loading.....</div>
    }

  }

  // console.log(res);
  

  return (
    <>
      <div>
        <h1 className={styles.title}>Page index</h1>

        <h3>父组件</h3>
        {/* <div>getNum: {getNumMemo}</div> */}
        {/* <button onClick={() => setCount(count + 1)}>+1</button> */}
        {/* <input
          type="text"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        /> */}
        {/* <Child count={count} updateCount={updateCount}></Child> */}
        {/* <Child count={count} updateCount={() => {console.log("夫业务");
        }}></Child> */}
        <div>{JSON.stringify(data)}</div>
        {/* {getBook()} */}
        <button onClick={getGoods}>获取goods数据</button>
      </div>
    </>
  );
}
