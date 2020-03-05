import React, { Component } from 'react';

// HOC 高阶组件
function HOC(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: ''
      }
    }

    onChange = (e) => {
      this.setState({
        name: e.target.value
      })
      // console.log
    }

    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange
        }
      }
      return <WrappedComponent {...newProps} />
    }
  }
}

@HOC
class Example extends Component {
  render () {
    return (
      <input {...this.props.name} type="text"/>
    )
  }
}

export default Example