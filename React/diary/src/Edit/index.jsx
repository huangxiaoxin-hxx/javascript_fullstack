import React, { useState, useEffect } from 'react';
import './style.css'
import { Toast, Button, List, InputItem, TextareaItem, DatePicker, ImagePicker } from 'antd-mobile'
import axios from '../utils/axios'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { getQueryString } from '../utils'

const Edit = () => {
  const [date, setDate] = useState()
  const [files, setFiles] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const history = useHistory()
  const id = getQueryString('id')
  const onChange = (file, type, index) => {
    console.log(file, type, index)
    setFiles(file)
  }

  useEffect(() => {
    if(id) {
      axios.get(`/detail/${id}`).then(res => {
        console.log(res)
        if (res.data.length) {
          const data = res.data[0]
          setTitle(data.title)
          setContent(data.content)
          setFiles([{url: data.url}])
          setDate(new Date(data.date))
        }
      })
    }
  },[])

  const publish = () => {
    if (!title || !content || !date) {
      Toast.fail('请填写必要的参数')
      return
    }
    const params = {
      title,
      content,
      date: moment(date).format('YYYY-MM-DD'),
      url: files.length ? files[0].url : ''
    }
    if(id) {
      params['id'] = id
      axios.post('/update', params).then(res => {
        Toast.success('修改成功')
        // console.log(res)
        // console.log(history)
        history.push('/')
      })
    } else {
      axios.post('/add', params).then(res => {
        Toast.success('添加成功')
        // console.log(res)
        // console.log(history)
        history.push('/')
      })
    }
  }

  return (
    <div className="diary-edit">
      <List renderHeader={() => '编辑日记'}>
        <List.Item>
          <InputItem
            clear
            placeholder="请输入标题"
            onChange={(value) => {setTitle(value)}}
            value={title?title:''}
          >
            标题
          </InputItem>
          <TextareaItem
            placeholder="请输入日记内容"
            rows={6}
            onChange={(value) => {setContent(value)}}
            value={content?content:''}
          >
          </TextareaItem>
          <DatePicker
            mode="date"
            title="请选择日期"
            extra="请选择日期"
            value={date}
            onChange={date => setDate(date)}
          >
            <List.Item arrow="horizontal">日期</List.Item>
          </DatePicker>
          <ImagePicker
            files={files}
            onChange={onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 1}
            multiple={false}
          />
        </List.Item>
        <Button type="primary" onClick={() => {publish()}}>发布</Button>
      </List>
    </div>
  )
}

export default Edit