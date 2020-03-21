import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  ListItem,
  ListInfo
} from '../style.js'

class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className="pic" src={item.get('imgUrl')} alt={item.get('title')} />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')} </p>
                </ListInfo>
              </ListItem>
            )
          })
        }

      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.get('articleList')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);