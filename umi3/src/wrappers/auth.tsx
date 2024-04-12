import { Redirect } from "umi"

export default (props: any) => {
  if(Math. random() <  .5){
    return <div>{props.children}</div>
  }else{
    return <Redirect to={"/login"} />
  }
}