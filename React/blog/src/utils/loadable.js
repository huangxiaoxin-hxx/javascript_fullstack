import React from 'react'
import Loadable from 'react-loadable'

// 通过的过场组件 loading组件
const loadingComponent = () => {
  return (
    <div>loading</div>
  )
}

// 过场组件默认采用通过的，如果传入了新的过场组件，那么我们就采用新的
export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading
  })
}