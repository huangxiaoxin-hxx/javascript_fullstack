'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async user() {
    return {
      "title": "您贵姓",
      "content": "免贵姓搞"
    }
  }
}

module.exports = UserService