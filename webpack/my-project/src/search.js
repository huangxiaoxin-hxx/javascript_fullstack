'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less'
import Img from './images/img.jpg'

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">Search Text React
        <img src={Img}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Search/>,
  document.getElementById('root')
)