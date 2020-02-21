import React, { Component } from 'react'

// 高阶组件--链式调用
const withName = Comp => {
  class NewComponet extends Component {
    componentDidMount() {
      console.log('do somthing')
    }
    render () { // render 会在 componentDidMount 之前
      return <Comp {...this.props} name="高阶组件使用" />
    }
  }

  return NewComponet
}

const withLog = Comp => {
  console.log(Comp.name + '渲染了')
  return props => <Comp {...props} />
}

@withLog // withLog(Jpsite)
@withName // withName(withLog)
@withLog 
class Jpsite extends Component {
  render () {
    return (
      <div className="App">
        {this.props.state} - {this.props.name}
      </div>
    )
  }
}

// export default withName(withLog(Jpsite))
export default Jpsite