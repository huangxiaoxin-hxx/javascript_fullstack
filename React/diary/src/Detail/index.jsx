import React, { useState, useEffect } from 'react';
import { NavBar, Icon, List, Modal } from 'antd-mobile'
import { getQueryString } from '../utils'
import { useHistory } from 'react-router-dom'
import axios from '../utils/axios';


const Detail = () => {
  const alert = Modal.alert
  const [detail, setDetail] = useState({})
  const history = useHistory()
  const id = getQueryString('id')

  useEffect(() => {
    axios.get(`/detail/${id}`).then((res) => {
      console.log(res)
      if (res.data.length) {
        setDetail(res.data[0])
      }
    })
  }, [])

  const deleteDiary = (id) => {
    alert('Delete', '是否删除该日记?', [
      { text: '手滑了', onPress: () => { return } },
      {
        text: '删除', onPress: () => {
          axios.post('delete', { id }).then(res => {
            console.log(res)
            history.push('/')
          })
        }
      },
    ])

  }

  return (
    <div className="diary-detail">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
        rightContent={[
          <img onClick={() => history.push(`/edit?id=${detail.id}`)} style={{width: 26, marginRight: 10}} src="http://s.weituibao.com/1578721957732/Edit.png" alt=""/>,
          <Icon type="cross-circle-o" onClick={() => deleteDiary(detail.id)} />
        ]}
      >
        {detail.title || ''}
      </NavBar>
      <List renderHeader={() => `${detail.date} 下雨`} className="my-list">
        <List.Item wrap={true}>
          {detail.content}
        </List.Item>
      </List>
    </div>
  )
}

export default Detail