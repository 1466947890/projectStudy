import {memo} from 'react'

const Child = ({count, updateCount}: {count: number, updateCount: () => void}) => {

  const show = () => {
    console.log("child组件渲染");
  }


  
  return (
    <div>
      <h4>子组件</h4>
      <div>{show()}</div>
      <div>{count}</div>
      <div><button onClick={updateCount}>触发任务</button></div>
      {/* <button onClick={() => setCount(count + 1)}>+1</button> */}
    </div>
  )
}

export default memo(Child)