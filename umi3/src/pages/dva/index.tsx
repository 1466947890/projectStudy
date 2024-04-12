import { connect } from "umi"

const Dva = (props) => {
  return (
    <>
      <h3>dva</h3>
      <h3 className="title">获取全局 state</h3>
      <div>text: {props.text}</div>
      <div>title: {props.title}</div>
      <div>A: {props.A}</div>
      <div>isLogin: {props.isLogin}</div>

      <h3>
        <button onClick={() => {
          props.dispatch({
            type: "global/setText",

          })
        }}>
          修改全局text，不传参数
        </button>
        <button onClick={() => {
          props.dispatch({
            type: "global/setTitle",
            payload: {a: 1, b: 2}
          })
        }}>
          修改全局title，传参
        </button>
      </h3>
    </>
  )
}

export default connect((state) => ({
  text: state.global.text,
  title: state.global.title,
  A: state.global.a,
  isLogin: state.global.login
}))(Dva)