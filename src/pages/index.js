import React ,{Component} from 'react'
import {connect} from 'dva'

class home extends Component {
  render(){
    let {num} = this.props.davstate
    return (<>
      <p>{num}</p>
      <button onClick={()=>this.add()}>yes</button>
    </>)
  }
  add(){
    // this.props.dispatch({
    //   type:'one/add',
    //   payload:1
    // })

    this.props.dispatch({
      type:'davstate/yes',
      payload:1
    })
  }
  componentDidMount(){
    console.log(this.props)
    
  }
}

export default connect(
  (state)=>{
    return {...state}
  }
)(home)