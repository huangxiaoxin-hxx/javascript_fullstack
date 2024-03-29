import React from 'react'

export default function requireLogin (Component) {
  // 组件有已经登录的模块，直接返回 (防止重新渲染)
  if (Component.requireLogin) {
    return Component.requireLogin
  }

  // 创建验证组件
  class requireLogin extends Component {
    constructor (props) {
      super (props)
      this.state = {
        login: true
      }
    }

    
    componentWillMount() {
      this.checkAuth()
    }
    
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps() {
      this.checkAuth()
    }

    checkAuth () {
      // 判断登录
      const login = sessionStorage.getItem('blogUser')
      // 未登录
      const pathname = this.props.location.pathname !== '/login'
      if (!login && pathname) {
        this.props.history.push('/login')
        return
      }
      this.setState({
        login: false
      })
    }

    render () {
      if (this.state.login) {
        return <Component {...this.props} />
      }
      return ''
    }
  }

  Component.requireLogin = requireLogin
  return Component.requireLogin
}