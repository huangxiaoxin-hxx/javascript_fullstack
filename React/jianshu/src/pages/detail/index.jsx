import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style.js'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends Component {
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    this.props.getDetail()
  }

  render() {
    return (
      <DetailWrapper>
        <Header>
          {this.props.title}
        </Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </DetailWrapper>
    );
  }
}

const mapState = (state) => ({
  title: state.detail.get('title'),
  content: state.detail.get('content')
})

const mapDispatch = (dispatch) => ({
  getDetail() {
    const action = actionCreators.getDetail()
    action(dispatch)
  }
})

export default connect(mapState, mapDispatch)(Detail);